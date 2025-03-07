---
layout: splash
classes:
  - landing
  - dark-theme
title: false
header:
  overlay_image: /assets/images/hero.jpg
  overlay_filter: "0.3"
permalink: /
hidden: true
excerpt: >
  记录技术学习和项目开发的点点滴滴<br />
  <small>最近更新: 2024-03-18</small>
---

<div class="home-content">

<div class="intro-header">
  <div class="avatar-wrapper">
    <img src="{{ 'assets/images/avatar.jpg' | relative_url }}" alt="Marlon" class="avatar">
  </div>
  <div class="intro-text-wrapper">
    <h1>👋 你好，我是 Marlon</h1>
    <p class="intro-text">
      一名热爱技术的全栈开发工程师，目前在日本东京工作。专注于：
    </p>
  </div>
</div>

<div class="personal-intro">
  <ul class="skills-list">
    <li>🌐 Web 开发：React、Vue、Node.js</li>
    <li>📱 移动端开发：iOS (Swift)、React Native</li>
    <li>☁️ 云服务：AWS、Docker、微服务架构</li>
    <li>🤖 AI 应用：LLM 应用开发与集成</li>
  </ul>
</div>

## 🚀 最近的项目

<div class="projects-grid">
  <a href="{{ '/projects/daymatter-extension/readme.html' | relative_url }}" class="project-card-link">
    <div class="project-card">
      <h3>🔍 DayMatter 浏览器扩展</h3>
      <p>一个简单的 Chrome 扩展，帮助你管理每日事项和待办任务</p>
      <ul>
        <li>新标签页显示每日事项</li>
        <li>任务分类和优先级管理</li>
        <li>简洁美观的界面设计</li>
        <li>数据本地存储，保护隐私</li>
      </ul>
      <span class="project-link">查看详情 →</span>
    </div>
  </a>

  <a href="{{ '/projects/slack-clone/' | relative_url }}" class="project-card-link">
    <div class="project-card">
      <h3>📱 Slack 聊天应用</h3>
      <p>基于 React 和 WebSocket 构建的实时聊天应用</p>
      <ul>
        <li>实时消息推送和接收</li>
        <li>多频道支持和私信功能</li>
        <li>消息历史记录和搜索</li>
        <li>文件上传和分享</li>
      </ul>
      <span class="project-link">查看详情 →</span>
    </div>
  </a>

  <a href="{{ '/projects/jira-clone/' | relative_url }}" class="project-card-link">
    <div class="project-card">
      <h3>📊 Jira 项目管理工具</h3>
      <p>使用 Vue 和 Node.js 开发的项目管理系统</p>
      <ul>
        <li>任务看板和进度追踪</li>
        <li>团队协作和任务分配</li>
        <li>项目数据统计和报表</li>
        <li>自定义工作流程</li>
      </ul>
      <span class="project-link">查看详情 →</span>
    </div>
  </a>
</div>

## 🔍 关于我

<div class="about-section">
  <div class="social-links">
    <a href="https://github.com/lengdaxia" class="social-link">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://leetcode.com/problemset/all/" class="social-link">
      <i class="fas fa-code"></i> LeetCode
    </a>
    <a href="https://paiza.jp/challenges" class="social-link">
      <i class="fas fa-laptop-code"></i> Paiza
    </a>
  </div>
  
  <p class="about-text">
    热爱探索新技术，喜欢解决具有挑战性的问题。在工作之余，积极参与开源社区，分享技术经验。
    如果你对技术有热情，欢迎一起交流学习！
  </p>
  
  <a href="/myblogs/about/aboutme" class="learn-more">了解更多 →</a>
</div>

</div>

<style>
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.personal-intro {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.skills-list {
  list-style: none;
  padding: 0;
}

.skills-list li {
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.project-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card-link:hover {
  text-decoration: none;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(74, 158, 255, 0.2);
  border-color: rgba(74, 158, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.project-card:active {
  transform: translateY(-2px);
  box-shadow: 0 2px 10px rgba(74, 158, 255, 0.1);
}

.project-card h3 {
  margin-top: 0;
  color: #4a9eff;
}

.project-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.project-card ul li {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.project-card ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4a9eff;
}

.project-link {
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  color: #4a9eff;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-card:hover .project-link {
  color: #fff;
  transform: translateX(5px);
}

.about-section {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a9eff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #fff;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1.5rem 0;
}

.learn-more {
  display: inline-block;
  color: #4a9eff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.learn-more:hover {
  color: #fff;
}

.intro-header {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #4a9eff;
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: cover;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(74, 158, 255, 0.5);
}

.intro-text-wrapper {
  flex-grow: 1;
}

.intro-text-wrapper h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #4a9eff;
}
</style>
