---
layout: single
title: "关于我"
permalink: /about/
header:
  overlay_image: /assets/images/hero.jpg
  overlay_filter: "0.3"
---

<div class="about-container">
  <div class="profile-section">
    <img src="{{ 'assets/images/avatar.jpg' | relative_url }}" alt="Marlon" class="profile-avatar">
    <div class="profile-info">
      <h1>Marlon</h1>
      <p class="subtitle">全栈开发工程师 @ 东京</p>
    </div>
  </div>

  <div class="section">
    <h2>🎯 专业技能</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>前端开发</h3>
        <ul>
          <li>React & React Native</li>
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>现代 CSS & SCSS</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>移动端开发</h3>
        <ul>
          <li>iOS (Swift & Objective-C)</li>
          <li>React Native</li>
          <li>移动端性能优化</li>
          <li>原生模块开发</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>后端开发</h3>
        <ul>
          <li>Node.js & Express</li>
          <li>RESTful API 设计</li>
          <li>数据库设计</li>
          <li>微服务架构</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>云服务 & DevOps</h3>
        <ul>
          <li>AWS 服务</li>
          <li>Docker & K8s</li>
          <li>CI/CD 流程</li>
          <li>监控和日志</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>💼 工作经历</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2021 - 现在</div>
        <div class="timeline-content">
          <h3>全栈开发工程师</h3>
          <p>负责企业级应用的全栈开发，包括前端界面设计、后端服务开发和云服务部署。</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2015 - 2021</div>
        <div class="timeline-content">
          <h3>iOS 开发工程师</h3>
          <p>专注于 iOS 应用开发，使用 Swift 和 Objective-C 开发多个成功上线的应用。</p>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>🌟 开源社区</h2>
    <div class="community-links">
      <a href="https://github.com/lengdaxia" class="community-link">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>
      <a href="https://leetcode.com/marlon2brando/" class="community-link">
        <i class="fas fa-code"></i>
        <span>LeetCode</span>
      </a>
      <a href="https://paiza.jp/challenges" class="community-link">
        <i class="fas fa-laptop-code"></i>
        <span>Paiza</span>
      </a>
      <a href="https://qiita.com/marlonnndas" class="community-link">
        <i class="fas fa-pen"></i>
        <span>Qiita</span>
      </a>
    </div>
  </div>
</div>

<style>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #4a9eff;
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.3);
}

.profile-info {
  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #4a9eff;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-top: 0.5rem;
  }
}

.section {
  margin: 3rem 0;
  
  h2 {
    color: #4a9eff;
    border-bottom: 2px solid rgba(74, 158, 255, 0.2);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #4a9eff;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #4a9eff;
      }
    }
  }
}

.timeline {
  position: relative;
  padding-left: 2rem;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(74, 158, 255, 0.2);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;

  &:before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #4a9eff;
    border: 2px solid #fff;
  }
}

.timeline-date {
  font-weight: bold;
  color: #4a9eff;
  margin-bottom: 0.5rem;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    margin: 0 0 1rem 0;
    color: #fff;
  }

  p {
    margin: 0;
    color: #ccc;
  }
}

.community-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.community-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-decoration: none;
  color: #4a9eff;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(74, 158, 255, 0.1);
    transform: translateY(-2px);
    border-color: rgba(74, 158, 255, 0.3);
  }

  i {
    font-size: 1.5rem;
  }

  span {
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .community-links {
    grid-template-columns: 1fr;
  }
}
</style>
