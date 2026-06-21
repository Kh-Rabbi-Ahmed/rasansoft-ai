#!/bin/bash

# Docker helper script for Rasansoft AI
# Usage: ./docker-helper.sh [command]

set -e

DOCKER_IMAGE="rasansoft-ai"
DOCKER_TAG="latest"

help() {
    echo "Rasansoft AI Docker Helper"
    echo ""
    echo "Usage: ./docker-helper.sh [command]"
    echo ""
    echo "Commands:"
    echo "  build          Build production Docker image"
    echo "  build-dev      Build development Docker image"
    echo "  run            Run production container"
    echo "  run-dev        Run development container with hot-reload"
    echo "  compose-up     Start using docker-compose (production)"
    echo "  compose-dev    Start using docker-compose (development)"
    echo "  compose-down   Stop docker-compose containers"
    echo "  logs           View production container logs"
    echo "  logs-dev       View development container logs"
    echo "  shell          Open shell in running production container"
    echo "  shell-dev      Open shell in running development container"
    echo "  clean          Remove all containers and images"
    echo "  help           Show this help message"
}

build() {
    echo "🔨 Building production image: $DOCKER_IMAGE:$DOCKER_TAG"
    docker build -t "$DOCKER_IMAGE:$DOCKER_TAG" .
    echo "✅ Production image built successfully"
}

build_dev() {
    echo "🔨 Building development image: $DOCKER_IMAGE:dev"
    docker build -f Dockerfile.dev -t "$DOCKER_IMAGE:dev" .
    echo "✅ Development image built successfully"
}

run() {
    echo "🚀 Running production container..."
    docker run -p 3000:3000 --name "$DOCKER_IMAGE-prod" "$DOCKER_IMAGE:$DOCKER_TAG"
}

run_dev() {
    echo "🚀 Running development container with hot-reload..."
    docker run -p 3000:3000 \
        -v "$(pwd):/app" \
        -v /app/node_modules \
        --name "$DOCKER_IMAGE-dev" \
        "$DOCKER_IMAGE:dev"
}

compose_up() {
    echo "🚀 Starting with docker-compose (production)..."
    docker-compose up -d
    echo "✅ Container is running at http://localhost:3000"
}

compose_dev() {
    echo "🚀 Starting with docker-compose (development)..."
    docker-compose -f docker-compose.dev.yml up
}

compose_down() {
    echo "🛑 Stopping docker-compose containers..."
    docker-compose down
    echo "✅ Containers stopped"
}

logs() {
    echo "📋 Production logs:"
    docker logs -f "$DOCKER_IMAGE-prod" || true
}

logs_dev() {
    echo "📋 Development logs:"
    docker logs -f "$DOCKER_IMAGE-dev" || true
}

shell() {
    echo "🐚 Opening shell in production container..."
    docker exec -it "$DOCKER_IMAGE-prod" sh
}

shell_dev() {
    echo "🐚 Opening shell in development container..."
    docker exec -it "$DOCKER_IMAGE-dev" sh
}

clean() {
    echo "🧹 Cleaning up Docker resources..."
    docker-compose down 2>/dev/null || true
    docker-compose -f docker-compose.dev.yml down 2>/dev/null || true
    docker rm -f "$DOCKER_IMAGE-prod" 2>/dev/null || true
    docker rm -f "$DOCKER_IMAGE-dev" 2>/dev/null || true
    docker rmi "$DOCKER_IMAGE:$DOCKER_TAG" 2>/dev/null || true
    docker rmi "$DOCKER_IMAGE:dev" 2>/dev/null || true
    echo "✅ Cleanup completed"
}

case "${1:-help}" in
    build)
        build
        ;;
    build-dev)
        build_dev
        ;;
    run)
        run
        ;;
    run-dev)
        run_dev
        ;;
    compose-up)
        compose_up
        ;;
    compose-dev)
        compose_dev
        ;;
    compose-down)
        compose_down
        ;;
    logs)
        logs
        ;;
    logs-dev)
        logs_dev
        ;;
    shell)
        shell
        ;;
    shell-dev)
        shell_dev
        ;;
    clean)
        clean
        ;;
    help)
        help
        ;;
    *)
        echo "Unknown command: $1"
        help
        exit 1
        ;;
esac
