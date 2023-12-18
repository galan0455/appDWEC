@echo off
title Apagar y Encender Hyper-V
echo.
echo   Script para encender y apagar Hyper-V, en caso de necesitar Docker, 
echo   tenemos que encender Hyper-V (pulsar E), por otro lado, en caso de 
echo   necesitar arrancar una maquina virtual, lo que tenemos que hacer es 
echo   apagar Hyper-V (pulsar A).
echo   CUIDADO, tras escoger la opcion A o E y apagar o encender Hyper-V, es 
echo   necesario reiniciar el sistema para que funcione correctamente, comprueba
echo   que tienes todos tus archivos guardados correctamente para evitar alguna 
echo   perdida de datos. Si has ejecutado el script sin querer, pulsa S de salir.
echo   Asegurese de ejecutar este .bat con permisos de administrador, si no es 
echo   asi, por favor pulse S de salir y ejecutalo de nuevo como administrador.
echo.
choice /C AES /N /T 15 /D S /M "Quieres [A]pagar Hyper-V (Maquinas virtuales), [E]ncender Hyper-V(Docker) o [S]alir?"

IF errorlevel 3 goto end
IF errorlevel 2 goto encender
IF errorlevel 1 goto apagar


:apagar
echo.
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V /NoRestart
bcdedit /set hypervisorlaunchtype off
echo.
goto reiniciar

:encender
echo Habilitando caracteristica
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All /NoRestart
echo Confirmando caracteristica
bcdedit /set hypervisorlaunchtype auto
echo.
goto reiniciar

:reiniciar
pause
shutdown /r /t 0

:end
exit