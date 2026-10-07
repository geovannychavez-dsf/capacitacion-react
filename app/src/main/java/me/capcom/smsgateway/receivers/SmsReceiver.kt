package me.capcom.smsgateway.receivers

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.provider.Telephony.Sms.Intents
import android.util.Log
import me.capcom.smsgateway.helpers.SubscriptionsHelper
import me.capcom.smsgateway.modules.logs.LogsService
import me.capcom.smsgateway.modules.logs.db.LogEntry
import me.capcom.smsgateway.modules.receiver.data.InboxMessage
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class SmsReceiver : BroadcastReceiver(), KoinComponent {
    private val logsService: LogsService by inject()

    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action != Intents.SMS_RECEIVED_ACTION
            && intent.action != Intents.DATA_SMS_RECEIVED_ACTION
        ) {
            return
        }

        val messages = Intents.getMessagesFromIntent(intent) ?: return
        if (messages.isEmpty()) return

        val isDataMessage = intent.action == Intents.DATA_SMS_RECEIVED_ACTION
        val firstMessage = messages.first()

        logsService.insert(
            LogEntry.Priority.INFO,
            "SmsReceiver",
            "Received SMS via system receiver - action: ${intent.action}, sender: ${firstMessage.displayOriginatingAddress}",
        )
        
        // La procesamiento lo hace MessagesReceiver que ya está registrado en ReceiverService
        // Este receiver solo asegura que la app aparezca como opcion en Configuracion > Apps > Por defecto
    }

    companion object {
        private const val TAG = "SmsReceiver"

        private val INSTANCE: SmsReceiver by lazy { SmsReceiver() }

        fun register(context: Context) {
            val appContext = context.applicationContext
            unregister(appContext)

            val textFilter = IntentFilter().apply {
                addAction(Intents.SMS_RECEIVED_ACTION)
                priority = IntentFilter.SYSTEM_HIGH_PRIORITY
            }
            appContext.registerReceiver(
                INSTANCE,
                textFilter
            )

            val dataFilter = IntentFilter().apply {
                addAction(Intents.DATA_SMS_RECEIVED_ACTION)
                addDataScheme("sms")
                addDataAuthority("*", "53739")
                priority = IntentFilter.SYSTEM_HIGH_PRIORITY
            }
            appContext.registerReceiver(
                INSTANCE,
                dataFilter
            )
        }

        fun unregister(context: Context) {
            try {
                context.applicationContext.unregisterReceiver(INSTANCE)
            } catch (e: IllegalArgumentException) {
                Log.w(TAG, "Receiver was not registered", e)
            }
        }
    }
}
