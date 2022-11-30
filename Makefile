FILE=Dockerfile.typescript
NODE_VERSION=16
IMAGE_NAME=utils-image

docker-build:
	docker build -t $(IMAGE_NAME) -f $(FILE) --build-arg NODE_VERSION=$(NODE_VERSION) .

commit:
	npx --package cz-emoji-conventional --package commitizen -- cz