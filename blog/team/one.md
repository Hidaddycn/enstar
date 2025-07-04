---
layout: MyLayout
title: my frist blog actices
description: my frist blog actices description
editor: okkkkk
image: /DSCF9414.jpg
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
# 通过git代码托管平台上传文件到服务区

## 上传之前的准备工作

上传git等代码托管平台之前，需要隐藏一些敏感的信息，比如.env里面的信息

可以这样操作

1.  创建一个.gitignore文件，指明哪些敏感的文件不需要上传

````shell
# Node.js 依赖
/node_modules

# 环境变量文件
/.env

# 开发工具生成的文件
/.idea
/.vscode

# macOS 系统文件
/.DS_Store

# Windows 系统文件
/Thumbs.db

# 数据目录
/data/

# 其他常见忽略项
# 临时文件和目录
/tmp/
/temp/

# 日志文件
/*.log

# 编译生成的文件
/dist/
/build/

# 测试文件
/coverage/

# 其他特定于项目的文件或目录
# 例如，如果你有其他特定的生成文件或目录，也可以在这里添加```
````

上面的最明显的就是将node\_modules不上传，将来可以用户自己npm install去安装，第二个就是.env文件也不上传

1.  创建一个.env-example文件，这是一个示例文件，只留要属性，将值删去，这个文件将暴露给任何用户看，让其知道需要依赖哪些内容，根据自己的情况进行配置。

## 上传服务器

1.  服务器上生成一个ssh的密钥对，用来专门读取git仓库

比如在宝塔面板，打开命令行面板，输入生成密钥的命令

```shell
ssh-keygen -t rsa
```

创建好密钥对后，我们通过下面的命令查看密钥

    cat ~/.ssh/id_rsa.pub

查看到密钥后，复制内容，然后打开git的设置项
![示例图片](/blog/git.png "这是一个示例图片")

