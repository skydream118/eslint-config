#!/bin/sh

docker build --build-arg NODE_VERSION=12 -t sladg/base-img:12 -f Dockerfile.typescript .
docker push sladg/base-img:12

docker build --build-arg NODE_VERSION=14 -t sladg/base-img:14 -f Dockerfile.typescript .
docker push sladg/base-img:14

docker build --build-arg NODE_VERSION=16 -t sladg/base-img:16 -f Dockerfile.typescript .
docker push sladg/base-img:16

docker rmi sladg/base-img
