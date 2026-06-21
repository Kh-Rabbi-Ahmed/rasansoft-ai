@echo off
REM Docker helper script for Rasansoft AI (Windows)
REM Usage: docker-helper.bat [command]

setlocal enabledelayedexpansion

set DOCKER_IMAGE=rasansoft-ai
set DOCKER_TAG=latest

if "%1"=="" goto help
if "%1"=="help" goto help
if "%1"=="build" goto build
if "%1"=="build-dev" goto build_dev
if "%1"=="run" goto run
if "%1"=="run-dev" goto run_dev
if "%1"=="compose-up" goto compose_up
if "%1"=="compose-dev" goto compose_dev
if "%1"=="compose-down" goto compose_down
if "%1"=="logs" goto logs
if "%1"=="logs-dev" goto logs_dev
if "%1"=="shell" goto shell
if "%1"=="shell-dev" goto shell_dev
if "%1"=="clean" goto clean

echo Unknown command: %1
goto help

:help
echo Rasansoft AI Docker Helper (Windows)
echo.
echo Usage: docker-helper.bat [command]
echo.
echo Commands:
echo   build          Build production Docker image
echo   build-dev      Build development Docker image
echo   run            Run production container
echo   run-dev        Run development container with hot-reload
echo   compose-up     Start using docker-compose (production)
echo   compose-dev    Start using docker-compose (development)
echo   compose-down   Stop docker-compose containers
echo   logs           View production container logs
echo   logs-dev       View development container logs
echo   shell          Open shell in running production container
echo   shell-dev      Open shell in running development container
echo   clean          Remove all containers and images
echo   help           Show this help message
exit /b 0

:build
echo.
echo 8 Building production image: %DOCKER_IMAGE%:%DOCKER_TAG%
docker build -t %DOCKER_IMAGE%:%DOCKER_TAG% .
echo OK Production image built successfully
exit /b 0

:build_dev
echo.
echo 8 Building development image: %DOCKER_IMAGE%:dev
docker build -f Dockerfile.dev -t %DOCKER_IMAGE%:dev .
echo OK Development image built successfully
exit /b 0

:run
echo.
echo  Running production container...
docker run -p 3000:3000 --name %DOCKER_IMAGE%-prod %DOCKER_IMAGE%:%DOCKER_TAG%
exit /b 0

:run_dev
echo.
echo  Running development container with hot-reload...
docker run -p 3000:3000 ^
  -v %cd%:/app ^
  -v /app/node_modules ^
  --name %DOCKER_IMAGE%-dev ^
  %DOCKER_IMAGE%:dev
exit /b 0

:compose_up
echo.
echo  Starting with docker-compose (production)...
docker-compose up -d
echo OK Container is running at http://localhost:3000
exit /b 0

:compose_dev
echo.
echo  Starting with docker-compose (development)...
docker-compose -f docker-compose.dev.yml up
exit /b 0

:compose_down
echo.
echo  Stopping docker-compose containers...
docker-compose down
echo OK Containers stopped
exit /b 0

:logs
echo.
echo  Production logs:
docker logs -f %DOCKER_IMAGE%-prod
exit /b 0

:logs_dev
echo.
echo  Development logs:
docker logs -f %DOCKER_IMAGE%-dev
exit /b 0

:shell
echo.
echo  Opening shell in production container...
docker exec -it %DOCKER_IMAGE%-prod sh
exit /b 0

:shell_dev
echo.
echo  Opening shell in development container...
docker exec -it %DOCKER_IMAGE%-dev sh
exit /b 0

:clean
echo.
echo  Cleaning up Docker resources...
docker-compose down 2>nul
docker-compose -f docker-compose.dev.yml down 2>nul
docker rm -f %DOCKER_IMAGE%-prod 2>nul
docker rm -f %DOCKER_IMAGE%-dev 2>nul
docker rmi %DOCKER_IMAGE%:%DOCKER_TAG% 2>nul
docker rmi %DOCKER_IMAGE%:dev 2>nul
echo OK Cleanup completed
exit /b 0
