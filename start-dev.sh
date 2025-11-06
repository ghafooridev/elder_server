#!/bin/bash
PROJECT_ROOT="$(pwd)"

CONF="$PROJECT_ROOT/deploy/nginx/nginx.local.conf"  # default dev config

if [ "$1" == "docker" ]; then
  CONF="$PROJECT_ROOT/deploy/nginx/nginx.docker.conf"
fi

# Kill Nginx
sudo pkill nginx || true

# Start Nx apps (dev only)
if [ "$1" != "docker" ]; then
  npx nx reset
  npx nx run-many --target=serve --projects=auth,reminder,care,talk,product,file,assistant,notification,game --output-style=stream &
  sleep 10
fi

# Start Nginx
sudo nginx -c "$CONF"

echo "API Gateway running with $CONF"
