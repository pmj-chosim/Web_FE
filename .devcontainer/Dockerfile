FROM node:22-bullseye

# 타임존 설정
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 필요한 도구 설치
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 작업 디렉토리 설정
WORKDIR /workspace

# 비sudo 사용자를 위한 npm 전역 패키지 경로 설정
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# 필요한 전역 패키지 설치
RUN npm install -g vite@latest eslint prettier

# 비sudo 사용자로 전환
USER node

# 비sudo 사용자를 위한 디렉토리 생성
RUN mkdir -p /home/node/.npm-global

EXPOSE 3000