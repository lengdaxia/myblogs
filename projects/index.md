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
    <button class="category-btn active" data-category="all">All</button>
    <button class="category-btn" data-category="extension">Chrome Extension</button>
    <button class="category-btn" data-category="web">Web</button>
    <button class="category-btn" data-category="mobile">mobile</button>
    <button class="category-btn" data-category="tv">TV</button>
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
      <p>使用 React 和 Node.js 开发的项目管理系统</p>
      <ul>
        <li>任务看板和进度追踪</li>
        <li>团队协作和任务分配</li>
        <li>项目数据统计和报表</li>
        <li>自定义工作流程</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">React</span>
        <span class="project-tag">Node.js</span>
        <span class="project-tag">AWS</span>
      </div>
      <a href="jira-clone/index" class="project-link">查看详情 →</a>
    </div>
    <!-- Joyfull Web -->
    <div class="project-card" data-category="web">
      <h3>🍽️ Joyfull 官方网站</h3>
      <p>日本连锁餐饮品牌官方网站，负责网站开发和维护</p>
      <ul>
        <li>与销售部门协作，进行网站设计和开发</li>
        <li>使用 Photoshop 和 AI 进行设计切图</li>
        <li>新菜单更新和数据库维护</li>
        <li>活动页面开发和维护</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">PHP</span>
        <span class="project-tag">AWS</span>
        <span class="project-tag">Web</span>
      </div>
      <a href="https://www.joyfull.co.jp/" class="project-link" target="_blank">访问网站 →</a>
    </div>

    <!-- Joyfull App -->
    <div class="project-card" data-category="mobile">
      <h3>📱 Joyfull 移动应用</h3>
      <p>使用 Flutter 开发的跨平台移动应用，支持 iOS 和 Android</p>
      <ul>
        <li>从 0 到 1 完整参与产品设计和开发</li>
        <li>负责应用开发、测试和维护</li>
        <li>完成应用的上架发布</li>
        <li>持续优化用户体验</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">Flutter</span>
        <span class="project-tag">Dart</span>
        <span class="project-tag">AWS</span>
      </div>
      <a href="https://apps.apple.com/jp/app/ジョイフルアプリ/id1433877820" class="project-link" target="_blank">查看应用 →</a>
    </div>

    <!-- 趣剪短视频 -->
    <div class="project-card" data-category="mobile">
      <h3>🎬 趣剪短视频</h3>
      <p>一款专业的 Vlog 视频剪辑助手，提供强大的视频编辑功能</p>
      <ul>
        <li>核心视频剪辑功能开发</li>
        <li>使用 FFmpeg 实现视频处理</li>
        <li>优化视频处理性能</li>
        <li>提升用户剪辑体验</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">iOS</span>
        <span class="project-tag">FFmpeg</span>
        <span class="project-tag">视频处理</span>
      </div>
      <a href="https://apps.apple.com/jp/app/id1470606794" class="project-link" target="_blank">查看应用 →</a>
    </div>

    <!-- 石家庄智慧公交 -->
    <div class="project-card" data-category="mobile">
      <h3>🚌 石家庄智慧公交</h3>
      <p>一款智能公交查询应用，提供实时公交位置和路线规划功能</p>
      <ul>
        <li>实时显示公交车位置</li>
        <li>智能路线规划功能</li>
        <li>地图集成和实时更新</li>
        <li>优化用户出行体验</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">iOS</span>
        <span class="project-tag">地图</span>
        <span class="project-tag">实时数据</span>
      </div>
      <a href="https://apps.apple.com/cn/app/石家庄智慧公交/id6464342871" class="project-link" target="_blank">查看应用 →</a>
    </div>

    <!-- d アニメストア -->
    <div class="project-card" data-category="tv">
      <h3>📺 d アニメストア</h3>
      <p>大型多端流媒体平台（200万+会员），使用 KeplerOS 跨端框架开发</p>
      <ul>
        <li>使用 React.lazy 和 Suspense 实现动态模块加载</li>
        <li>NodeJS 和 Express 搭建本地开发 API 服务</li>
        <li>设计 PS 平台 Thumbnail Seekbar 组件</li>
        <li>内存泄漏优化，ANR 率从 5% 降至 0.7%</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">React Native</span>
        <span class="project-tag">Node.js</span>
        <span class="project-tag">性能优化</span>
      </div>
      <a href="#" class="project-link">查看详情 →</a>
    </div>

    <!-- Lemino -->
    <div class="project-card" data-category="mobile">
      <h3>🎬 Lemino 影视平台</h3>
      <p>使用 Flutter 开发的全平台影视应用，采用 RiverPod 状态管理</p>
      <ul>
        <li>重构基础服务层，内存占用降低 50%</li>
        <li>实现 Lazy Loading 和分页缓存机制</li>
        <li>列表滑动帧率稳定在 60FPS</li>
        <li>优化全平台用户体验</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">Flutter</span>
        <span class="project-tag">RiverPod</span>
        <span class="project-tag">性能优化</span>
      </div>
      <a href="#" class="project-link">查看详情 →</a>
    </div>

    <!-- 智慧検針 -->
    <div class="project-card" data-category="mobile">
      <h3>📱 智慧検針系统</h3>
      <p>基于 IoT 和 Android 的智能检测系统，采用 AWS 云服务</p>
      <ul>
        <li>使用 Kotlin Coroutine 处理异步任务</li>
        <li>集成 AWS Cognito 和 Rekognition 服务</li>
        <li>Room 本地缓存策略优化</li>
        <li>图片分级存储降低 CDN 成本 25%</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">Kotlin</span>
        <span class="project-tag">AWS</span>
        <span class="project-tag">IoT</span>
      </div>
      <a href="#" class="project-link">查看详情 →</a>
    </div>

    <!-- 掌上菜场 -->
    <div class="project-card" data-category="mobile">
      <h3>🛒 掌上菜场</h3>
      <p>生鲜电商配送平台，包含用户端、商户端和骑手端的完整生态</p>
      <ul>
        <li>用户下单和支付功能</li>
        <li>骑手实时配送系统</li>
        <li>商户订单管理和结算</li>
        <li>完整的支付提现流程</li>
      </ul>
      <div class="project-meta">
        <span class="project-tag">iOS</span>
        <span class="project-tag">电商</span>
        <span class="project-tag">支付</span>
      </div>
      <a href="#" class="project-link">查看详情 →</a>
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
