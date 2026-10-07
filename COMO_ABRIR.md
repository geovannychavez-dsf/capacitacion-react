# Guía para Abrir y Ejecutar el Proyecto desde Android Studio

## Tabla de Contenidos
- [Requisitos Previos](#requisitos-previos)
- [Versión Recomendada de Gradle](#versión-recomendada-de-gradle)
- [Pasos para Abrir el Proyecto](#pasos-para-abrir-el-proyecto)
- [Configuración Inicial](#configuración-inicial)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Resolución de Problemas](#resolución-de-problemas)

---

## Requisitos Previos

Antes de abrir el proyecto, asegúrate de tener instalado:

1. **Android Studio**: Versión 2022.3.1 (Ladybug) o superior
2. **JDK 17**: Requerido por Android Gradle Plugin 8.1.2
3. **Android SDK**: 
   - SDK Platform 33 (Android 13)
   - SDK Build-Tools 33.0.2 o superior
   - Command-line Tools

### Verificar JDK

Para verificar si tienes JDK 17:
```bash
java -version
```

El output debe mostrar:
```
openjdk version "17.x.x" 202x-xx-xx
```

### Verificar Android SDK

Abre Android Studio y ve a:
- **File > Settings** (o **Android Studio > Preferences** en Mac)
- **Appearance & Behavior > System Settings > Android SDK**

Verifica que estén instalados:
- **SDK Platforms**: Android 13.0 (Tiramisu) - API 33
- **SDK Tools**: Android SDK Build-Tools 33.0.2+

---

## Versión Recomendada de Gradle

### Configuración Actual del Proyecto

| Componente | Versión |
|------------|---------|
| **Gradle Wrapper** | 8.0 |
| **Android Gradle Plugin (AGP)** | 8.1.2 |
| **Kotlin** | 1.7.22 |
| **Compile SDK** | 33 |
| **Target SDK** | 33 |
| **Min SDK** | 21 (Android 5.0) |
| **JVM Target** | 1.8 |

### ¿Debo Actualizar Gradle?

#### Recomendación: NO ACTUALIZAR por ahora

**Razones para mantener la versión actual:**

1. **Estabilidad**: El proyecto está configurado con Gradle 8.0 y AGP 8.1.2, que son versiones estables y compatibles entre sí.

2. **Compatibilidad con Kotlin 1.7.22**: El plugin de Kotlin (1.7.22) está diseñado para trabajar con AGP 8.1.x. Actualizar Gradle podría requerir actualizar Kotlin también, lo cual implica más pruebas.

3. **Riesgo de breaking changes**: Versiones más recientes de Gradle pueden introducir cambios que afecten la compilación.

#### Cuándo Considerar una Actualización

Considera actualizar solo si:
- Necesitas características específicas de versiones más recientes de Gradle
- Hay vulnerabilidades de seguridad conocidas en Gradle 8.0
- El proyecto requiere dependencies que solo funcionan con versiones más nuevas

### Si decides actualizar

**Recomendación de versión objetivo:**
- **Gradle**: 8.5 (balance entre características y estabilidad)
- **Android Gradle Plugin**: 8.2.0 o 8.2.1
- **Kotlin**: 1.9.20 (si decides actualizar también Kotlin)

**Proceso de actualización (solo si es necesario):**

1. Modifica el archivo `gradle-wrapper.properties`:
```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-bin.zip
```

2. Modifica el archivo `build.gradle` (project-level):
```gradle
plugins {
    id 'com.android.application' version '8.2.0' apply false
    id 'com.android.library' version '8.2.0' apply false
    id 'org.jetbrains.kotlin.android' version '1.9.20' apply false
    // ...
}
```

3. **Sincroniza el proyecto** en Android Studio
4. **Revisa los logs de compilación** para detectar errores
5. **Ejecuta tests** para verificar que todo funciona

---

## Pasos para Abrir el Proyecto

### Opción 1: Abrir desde Android Studio

1. **Abre Android Studio**
   - La ventana de bienvenida debería aparecer

2. **Selecciona "Open"** (o "Open an Existing Project")

3. **Navega al directorio del proyecto**:
   ```
   C:\Users\SISTEMAS 04\android-sms-gateway
   ```

4. **Selecciona la carpeta** y haz clic en **OK**

5. **Espera la sincronización**
   - Android Studio detectará el proyecto Gradle
   - Comenzará a descargar dependencias si no están cacheadas
   - Puede tardar varios minutos la primera vez

### Opción 2: Abrir desde la línea de comandos

```bash
cd C:\Users\SISTEMAS 04\android-sms-gateway
studio64.exe .
```

O si estás en Mac/Linux:
```bash
cd /path/to/android-sms-gateway
studio.sh .
```

---

## Configuración Inicial

### 1. Configurar Android SDK Location

Si Android Studio no detecta automáticamente el SDK:

1. Ve a **File > Settings** (o **Android Studio > Preferences** en Mac)
2. Navega a **Appearance & Behavior > System Settings > Android SDK**
3. Verifica que el **Android SDK Location** apunte a:
   ```
   C:\Users\SISTEMAS 04\AppData\Local\Android\Sdk
   ```
4. Si no es correcto, haz clic en **Edit** y navega a la ubicación correcta

### 2. Permitir SDK Manager para instalar componentes

Si encuentras errores de dependencias faltantes:

1. Ve a **Tools > SDK Manager**
2. En la pestaña **SDK Platforms**, marca:
   - ☑️ Android 13.0 (Tiramisu) - API 33
3. En la pestaña **SDK Tools**, marca:
   - ☑️ Android SDK Build-Tools 33.0.2
   - ☑️ Android SDK Command-line Tools (latest)
4. Haz clic en **Apply** y luego **OK**

### 3. Sincronizar el Proyecto

Después de abrir el proyecto:

1. Android Studio mostrará un mensaje: **"Gradle Build"** o **"Sync Now"**
2. Haz clic en **"Sync Now"**

O manualmente:
- **File > Sync Project with Gradle Files**

### 4. Configurar Claves de Firma (Opcional para Release)

Para construir variantes de release, necesitas un keystore:

1. Crea un keystore (si no tienes uno):
```bash
keytool -genkey -v -keystore app/keystore.jks -keyalg RSA -keysize 2048 -storepass android -keypass android -validity 10000 -alias android
```

2. Crea un archivo `.env` en la raíz del proyecto con:
```bash
SIGNING_STORE_PASSWORD=android
SIGNING_KEY_ALIAS=android
SIGNING_KEY_PASSWORD=android
```

**Nota**: Este archivo está en `.gitignore` por seguridad.

---

## Ejecutar el Proyecto

### 1. Seleccionar Dispositivo de Ejecución

#### Opción A: Usar un Dispositivo Físico

1. **Habilitar modo desarrollador** en tu dispositivo Android:
   - Ve a **Settings > About Phone**
   - Toca 7 veces en **Build Number**
   
2. **Habilitar depuración USB**:
   - Ve a **Settings > System > Developer Options**
   - Activa **USB Debugging**

3. **Conecta tu dispositivo** vía USB

4. **Acepta la autorización** cuando aparezca el popup en el teléfono

5. En Android Studio, selecciona tu dispositivo en el dropdown de run configuration

#### Opción B: Usar un Emulador

1. Ve a **Tools > Device Manager**

2. Crea un nuevo dispositivo:
   - Selecciona un dispositivo (ej. Pixel 4a)
   - Descarga una imagen del sistema (API 33 recommended)
   - Haz clic en **Finish**

3. Inicia el emulador desde el Device Manager o con:
```bash
emulator -avd Pixel_4a_API_33
```

### 2. Ejecutar la Aplicación

**Método 1: Botón Run**
- Haz clic en el botón **▶ Run** (green play button) en la barra de herramientas
- O presiona **Shift + F10** (Windows/Linux) o **Control + R** (Mac)

**Método 2: Desde Menú**
- Ve a **Run > Run 'app'**

**Método 3: Desde Gradle Tasks**
- Abre el panel **Gradle** (derecha)
- Expande **Tasks > installation**
- Haz doble clic en **installDebug**

### 3. Build Variants Disponibles

El proyecto ofrece 4 variantes de build:

| Variant | Description | Use Case |
|---------|-------------|----------|
| **debug** | Development build con network security config estricto | Desarrollo diario |
| **debugInsecure** | Debuggable con tráfico cleartext permitido | Pruebas de red |
| **insecure** | Para desarrollo/testing con cleartext traffic | Entorno de desarrollo local |
| **release** | Production build con seguridad estricta | Producción |

**Para cambiar la variant:**
1. Ve a **Build > Select Build Variant**
2. Selecciona la variante deseada
3. O desde la barra de herramientas, haz clic en el dropdown junto al botón Run

### 4. Verificar la Ejecución

Cuando la app se instale exitosamente:

1. **Abre la aplicación** en el dispositivo/emulador
2. Deberías ver la pantalla principal con:
   - **Local Server** toggle
   - **Cloud Server** toggle
   - Secciones de configuración

3. **Permisos requeridos**: La app solicitará permisos:
   - SEND_SMS
   - READ_PHONE_STATE
   - READ_SMS
   - RECEIVE_SMS
   - RECEIVE_MMS

4. Acepta los permisos para continuar

---

## Resolución de Problemas

### Error: "Gradle sync failed"

**Causas comunes y soluciones:**

#### 1. JDK No Encontrado
```
Could not find tools.jar
```

**Solución:**
- Verifica que JDK 17 esté instalado
- Configura el JDK en Android Studio:
  - **File > Project Structure > SDK Location**
  - Establece **JDK location**

#### 2. Android SDK No Encontrado
```
Failed to find Android SDK
```

**Solución:**
- Verifica que `local.properties` exista y tenga:
  ```
  sdk.dir=C\:\\Users\\SISTEMAS 04\\AppData\\Local\\Android\\Sdk
  ```
- Si no existe, crea el archivo

#### 3. Dependency Resolution Failed
```
Failed to resolve: androidx.core:core-ktx:1.8.0
```

**Solución:**
- Ve a **File > Settings > Appearance & Behavior > System Settings > Android SDK**
- En **SDK Tools**, asegúrate de tener marcado **Google Maven**
- Haz clic en **Apply**

#### 4. Gradle Version Mismatch
```
This Gradle plugin is too old for this Gradle version
```

**Solución:**
- Asegúrate de que AGP 8.1.2 coincida con Gradle 8.0
- Revisa `gradle-wrapper.properties`

### Error: "compileSdk is not specified"

**Solución:**
- Verifica que `compileSdk 33` esté en `app/build.gradle`
- Re-sincroniza el proyecto

### Error: "INSTALL_FAILED"

**Soluciones:**

1. **Desinstalar versión anterior**:
```bash
adb uninstall me.capcom.smsgateway
adb install app/build/outputs/apk/debug/app-debug.apk
```

2. **Clean Project**:
- **Build > Clean Project**
- **Build > Rebuild Project**

3. **Clear Cache**:
- **File > Invalidate Caches > Invalidate and Restart**

### Error de Permiso en Android 10+

Si la app no detecta SMS:

1. Ve a **Settings > Apps > Default Apps > SMS app**
2. Selecciona **SmsGateway** como app predeterminada de SMS

### Error: "Firebase not configured"

**Solución:**
1. Copia tu `google-services.json` desde Firebase Console
2. Colócalo en: `app/google-services.json`
3. Re-sincroniza el proyecto

### Error: "keystore not found"

**Solución (para debug):**
- Usa la variante `debug` o `debugInsecure`
- O crea un keystore de prueba como se indicó anteriormente

### Errores de Kotlin

**Si ves errores como:**
```
Kotlin not configured
```

**Solución:**
1. Verifica que `id 'org.jetbrains.kotlin.android' version '1.7.22'` esté en `build.gradle`
2. Re-sincroniza
3. Si persiste: **File > Invalidate Caches > Invalidate and Restart**

### Problemas de Memoria

**Si la sincronización falla por falta de memoria:**

Edita `gradle.properties` y ajusta:
```properties
org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
```

---

## Flujo de Trabajo Recomendado

### Desarrollo Diario

```bash
# 1. Abrir proyecto
cd C:\Users\SISTEMAS 04\android-sms-gateway
studio64.exe .

# 2. Esperar sincronización

# 3. Seleccionar dispositivo de ejecución

# 4. Ejecutar (Shift + F10)
```

### Flujo de Desarrollo Recomendado

1. **Make** (Ctrl + F9): Compilar rápido sin empaquetar APK
2. **Build > Build Bundle(s) / APK(s) > Build APK(s)**: Generar APK para probar
3. **Run** (Shift + F10): Instalar y ejecutar en dispositivo seleccionado

### Pruebas

```bash
# Ejecutar tests unitarios
./gradlew test

# Ejecutar tests de instrumentación
./gradlew connectedAndroidTest
```

---

## Archivos Importantes del Proyecto

| Archivo | Descripción |
|---------|-------------|
| `build.gradle` (project) | Configuración global de Gradle |
| `app/build.gradle` | Configuración específica de la app |
| `gradle.properties` | Propiedades de Gradle y JVM |
| `local.properties` | Ruta del Android SDK (NO commits) |
| `settings.gradle` | Configuración de módulos |
| `gradle-wrapper.properties` | Versión de Gradle a usar |
| `app/google-services.json` | Configuración de Firebase (NO commits) |

---

## Próximos Pasos

1. **Familiarizarte con la estructura del proyecto**
   - `app/src/main/java/me/capcom/smsgateway/`: Código fuente Kotlin
   - `app/src/main/res/`: Recursos (layouts, strings, drawables)
   - `app/src/main/AndroidManifest.xml`: Configuración de la app

2. **Explorar las features**
   - Local Server vs Cloud Server
   - Webhooks
   - Multi-SIM support
   - MMS handling

3. **Contribuir**
   - Revisa `CONTRIBUTING.md` (si existe)
   - Lee el `README.md` para entender la arquitectura

---

## Recursos Adicionales

- [Documentación del Proyecto](https://docs.sms-gate.app/)
- [Android Developer Docs](https://developer.android.com/guide)
- [Gradle User Guide](https://docs.gradle.org/current/userguide/userguide.html)
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

---

**Última actualización**: Octubre 2026
**Versión del documento**: 1.0
