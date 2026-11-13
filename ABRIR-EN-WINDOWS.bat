@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Necesitas Node.js instalado para iniciar el servidor.
 echo Si acabas de instalarlo, cierra esta ventana y vuelve a abrirla.
 pause
 exit /b 1
)
node servidor-local.cjs
pause
