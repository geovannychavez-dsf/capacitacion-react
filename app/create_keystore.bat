@echo off
cd /d %~dp0
echo Creating keystore for signing...
%JAVA_HOME%\bin\keytool.exe -genkey -v -keystore keystore.jks -keyalg RSA -keysize 2048 -storepass smsgateway -keypass smsgateway -validity 10000 -alias smsgateway -dname "CN=SMS Gateway, OU=Development, O=SMS Gateway, L=Unknown, ST=Unknown, C=US"
echo Keystore created successfully!
pause
