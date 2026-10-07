package me.capcom.smsgateway.receivers

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import me.capcom.smsgateway.modules.logs.LogsService
import me.capcom.smsgateway.modules.logs.db.LogEntry
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class MmsDeliverReceiver : BroadcastReceiver(), KoinComponent {
    private val logsService: LogsService by inject()

    override fun onReceive(context: Context, intent: Intent) {
        logsService.insert(
            LogEntry.Priority.INFO,
            "MmsDeliverReceiver",
            "Received WAP PUSH DELIVER via system receiver - action: ${intent.action}",
            mapOf<String, String>()
        )
    }
}
