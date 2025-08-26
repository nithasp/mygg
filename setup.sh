#!/bin/bash

# -------------------------------- Angular ----------------------------------
IMAGE_NAME="mygg/app"
TAG="1.0"
CONTAINER_NAME="mygg-app"
NETWORK="bridge-net"
PUB_PORT=8085
DIR_LOG="/server/container/mygg_app/log"
DIR_CON_NGINX="/server/container/mygg_app/nginx.conf"
DIR_CON_DEFAULT="/server/container/mygg_app/default.conf"

# ---------------------------------------------------------------------------
sudo docker stop $CONTAINER_NAME
sudo docker rm   $CONTAINER_NAME
sudo docker rmi  $IMAGE_NAME:$TAG
sudo rm -rf $DIR_LOG

# ---------------------------------------------------------------------------
sudo docker build -t $IMAGE_NAME:$TAG /server/container/mygg_app
sudo docker run --name $CONTAINER_NAME \
                --network $NETWORK \
                -p $PUB_PORT:80 \
                --restart=always \
                -v $DIR_LOG:/var/log/nginx \
                -v $DIR_CON_NGINX:/etc/nginx/nginx.conf \
                -v $DIR_CON_DEFAULT:/etc/nginx/conf.d/default.conf \
                -d $IMAGE_NAME:$TAG
