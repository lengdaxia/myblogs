---
layout: single
title: "Jira 项目管理工具"
permalink: /projects/jira-clone/
header:
  overlay_image: res/screenshot-home.png
  overlay_filter: "0.3"
---

# Jira 项目管理工具

![项目截图](res/screenshot-home.png)

## 项目链接

- [GitHub 仓库](https://github.com/lengdaxia/project-management)

## 技术标签

- Vue.js
- Express
- MongoDB
- Node.js
- TypeScript

## 项目介绍

一个功能完整的项目管理系统，支持任务管理、团队协作和项目跟踪。采用现代化的技术栈和模块化的架构设计。

## 主要特性

### 技术栈

- Vue.js + Express + MongoDB
- TypeScript 类型支持
- RESTful API 设计
- AWS 云服务部署

### 核心功能

- 任务看板和列表视图
- Sprint 规划和跟踪
- 团队协作功能
- 数据统计和报表

### 项目管理

- 敏捷开发工作流
- 项目进度追踪
- 任务优先级管理
- 团队成员分配

### 系统特性

- 响应式设计
- 实时更新
- 性能优化
- 安全认证

## 系统架构

![架构图](res/pm-aws%20architecture.png)

## 数据结构

![数据结构图](res/Jira-schema-v2.png)

## AWS 部署说明

### 基础设施配置

- VPC, Internet Gateway
- Route Table, Security Group
- EC2, RDS 实例配置

### 服务器设置

```bash
# 安装 Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

# 安装必要工具
sudo yum update -y
sudo yum install git -y

# 使用 PM2 管理进程
npm install pm2 -g
sudo env PATH=$PATH:$(which node) $(which pm2) startup systemd -u $USER --hp $(eval echo ~$USER)
```

### 数据库配置

```bash
# 数据库连接
DATABASE_URL="postgresql://[db_username]:[pwd]@[rds-endpoint]:[port]/[db_name]?schema=public"

# 初始化数据库
npx prisma generate
npx prisma migrate dev --name init
npm run seed
```

## 待办事项

1. 完善单元测试和集成测试
2. 优化移动端体验
3. 添加更多自定义视图选项
4. 增强报表和分析功能
5. 改进文档和使用说明
