#!/bin/bash

# 检查是否处于git仓库中
if [ ! -d ".git" ]; then
    echo "当前目录不是一个git仓库"
    exit 1
fi

# 添加所有更改到暂存区
git add .

# 提交更改，提交信息从命令行参数获取
if [ "$#" -ne 1 ]; then
    echo "请提供一个提交信息作为命令行参数"
    exit 1
fi

commit_message=$1
git commit -m "$commit_message"

# 推送到远程仓库，这里假设你已经设置了默认的远程仓库和分支
git push
