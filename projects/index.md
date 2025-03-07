---
title: "项目列表"
layout: single
permalink: /projects/
author_profile: false
classes:
  - landing
  - dark-theme
header:
  overlay_image: /assets/images/hero.jpg
  overlay_filter: "0.3"
---

<div class="projects-container" markdown="0">
  <div class="category-nav">
    <button class="category-btn active" data-category="all">所有项目</button>
    <button class="category-btn" data-category="extension">浏览器扩展</button>
    <button class="category-btn" data-category="web">Web 应用</button>
    <button class="category-btn" data-category="mobile">移动应用</button>
  </div>

  <div class="projects-list">
    <!-- DayMatter Extension -->
    <div class="project-card" data-category="extension">
      <h3>🔍 DayMatter 浏览器扩展</h3>
      <p>一个简单的 Chrome 扩展，帮助你管理每日事项和待办任务</p>
      <ul>
        <li>新标签页显示每日事项</li>
        <li>任务分类和优先级管理</li>
        <li>简洁美观的界面设计</li>
        <li>数据本地存储，保护隐私</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">Chrome Extension</span>
        <span class="project-tag">JavaScript</span>
        <span class="project-tag">效率工具</span>
      </div>
      <a href="{{ site.baseurl }}/projects/daymatter-extension/readme.html" class="project-link">查看详情 →</a>
    </div>
    <!-- Daily Haiku Extension -->
    <div class="project-card" data-category="extension">
      <h3>📝 Daily Inspire - 三语俳句</h3>
      <p>一个优雅的 Chrome 扩展，可以生成中日英三语俳句，让每一天都充满诗意</p>
      <ul>
        <li>生成中日英三语俳句</li>
        <li>使用传统复古的界面设计</li>
        <li>支持保存俳句到本地</li>
        <li>使用 OpenAI API 生成高质量俳句</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">Chrome Extension</span>
        <span class="project-tag">JavaScript</span>
        <span class="project-tag">OpenAI</span>
      </div>
      <a href="{{ site.baseurl }}/projects/daily-haiku/" class="project-link">查看详情 →</a>
    </div>
    <!-- Slack Clone -->
    <div class="project-card" data-category="web">
      <h3>📱 Slack 聊天应用</h3>
      <p>基于 React 和 WebSocket 构建的实时聊天应用</p>
      <ul>
        <li>实时消息推送和接收</li>
        <li>多频道支持和私信功能</li>
        <li>消息历史记录和搜索</li>
        <li>文件上传和分享</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">React</span>
        <span class="project-tag">WebSocket</span>
        <span class="project-tag">Firebase</span>
      </div>
      <a href="slack-clone/index" class="project-link">查看详情 →</a>
    </div>
    <!-- Jira Clone -->
    <div class="project-card" data-category="web">
      <h3>📊 Jira 项目管理工具</h3>
      <p>使用 Vue 和 Node.js 开发的项目管理系统</p>
      <ul>
        <li>任务看板和进度追踪</li>
        <li>团队协作和任务分配</li>
        <li>项目数据统计和报表</li>
        <li>自定义工作流程</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">Vue</span>
        <span class="project-tag">Node.js</span>
        <span class="project-tag">AWS</span>
      </div>
      <a href="jira-clone/index" class="project-link">查看详情 →</a>
    </div>

  </div>
</div>

<style>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-nav {
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.category-btn {
  padding: 8px 16px;
  border: 1px solid #4a9eff;
  border-radius: 20px;
  background: transparent;
  color: #4a9eff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: rgba(74, 158, 255, 0.1);
}

.category-btn.active {
  background: #4a9eff;
  color: white;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  transition: all 0.3s ease;
  color: #94a3b8;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(74, 158, 255, 0.2);
  border-color: rgba(74, 158, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.project-card h3 {
  color: #4a9eff;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.project-card p {
  margin: 0 0 15px 0;
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
}

.project-card ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0 0 15px 0;
  color: #94a3b8;
}

.project-card ul li {
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
  font-size: 1rem;
  line-height: 1.5;
}

.project-card ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4a9eff;
}

.project-meta {
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(74, 158, 255, 0.1);
  color: #4a9eff;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-link {
  display: inline-block;
  color: #4a9eff;
  text-decoration: none;
  margin-top: auto;
  padding: 8px 0;
  font-weight: 500;
  font-size: 1rem;
}

.project-link:hover {
  text-decoration: underline;
  color: #fff;
}

@media (max-width: 768px) {
  .projects-list {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const projectCards = document.querySelectorAll('.project-card');

  function filterProjects(category) {
    projectCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
      }
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects(btn.dataset.category);
    });
  });
});
</script>
