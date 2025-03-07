---
layout: single
title: "博客文章"
permalink: /blog/
header:
  overlay_image: /assets/images/hero.jpg
  overlay_filter: "0.3"
---

<div class="blog-container">
  <div class="category-nav">
    <button class="category-btn active" data-category="all">全部文章</button>
    <button class="category-btn" data-category="front-end">前端开发</button>
    <button class="category-btn" data-category="system-design">系统设计</button>
    <button class="category-btn" data-category="llm">AI/LLM</button>
    <button class="category-btn" data-category="blogs">其他博客</button>
  </div>

  <div class="posts-container">
    <!-- 前端开发文章 -->
    <div class="post-card" data-category="front-end">
      <div class="post-meta">
        <span class="post-date">2023-12-05</span>
        <span class="post-category">前端开发</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/2023-12-05-html/' | relative_url }}">HTML 基础知识</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">HTML</span>
        <span class="post-tag">前端</span>
      </div>
    </div>

    <div class="post-card" data-category="front-end">
      <div class="post-meta">
        <span class="post-date">2023-12-01</span>
        <span class="post-category">前端开发</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/2023-12-01-internet/' | relative_url }}">互联网基础知识</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">网络</span>
        <span class="post-tag">基础</span>
      </div>
    </div>

    <!-- LLM 文章 -->
    <div class="post-card" data-category="llm">
      <div class="post-meta">
        <span class="post-date">2024-02-08</span>
        <span class="post-category">AI/LLM</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/2024-02-08-roadmap/' | relative_url }}">LLM 学习路线图</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">AI</span>
        <span class="post-tag">LLM</span>
        <span class="post-tag">学习路线</span>
      </div>
    </div>

    <div class="post-card" data-category="llm">
      <div class="post-meta">
        <span class="post-date">2024-02-19</span>
        <span class="post-category">AI/LLM</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/posts/llm/2024-02-19-intro-course.html' | relative_url }}">LLM 入门课程</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">AI</span>
        <span class="post-tag">LLM</span>
        <span class="post-tag">教程</span>
      </div>
    </div>

    <div class="post-card" data-category="llm">
      <div class="post-meta">
        <span class="post-date">2024-03-04</span>
        <span class="post-category">AI/LLM</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/posts/llm/2024-03-04-rag.html' | relative_url }}">RAG 技术详解</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">AI</span>
        <span class="post-tag">LLM</span>
        <span class="post-tag">RAG</span>
      </div>
    </div>

    <!-- 系统设计文章 -->
    <div class="post-card" data-category="system-design">
      <div class="post-meta">
        <span class="post-date">2024-01-15</span>
        <span class="post-category">系统设计</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/posts/system-design/2024-01-15-aws.html' | relative_url }}">AWS 服务指南</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">AWS</span>
        <span class="post-tag">云服务</span>
      </div>
    </div>

    <div class="post-card" data-category="system-design">
      <div class="post-meta">
        <span class="post-date">2023-11-23</span>
        <span class="post-category">系统设计</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/posts/system-design/2023-11-23-notes.html' | relative_url }}">系统设计笔记</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">系统设计</span>
        <span class="post-tag">架构</span>
      </div>
    </div>

    <div class="post-card" data-category="system-design">
      <div class="post-meta">
        <span class="post-date">2023-11-23</span>
        <span class="post-category">系统设计</span>
      </div>
      <h2 class="post-title">
        <a href="{{ '/posts/system-design/2023-11-23-roadmaps.html' | relative_url }}">系统设计学习路线</a>
      </h2>
      <div class="post-tags">
        <span class="post-tag">系统设计</span>
        <span class="post-tag">学习路线</span>
      </div>
    </div>

  </div>
</div>

<style>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.category-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(74, 158, 255, 0.2);
  border-radius: 20px;
  background: transparent;
  color: #4a9eff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(74, 158, 255, 0.1);
  }

  &.active {
    background: #4a9eff;
    color: white;
  }
}

.posts-container {
  display: grid;
  gap: 2rem;
}

.post-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: rgba(74, 158, 255, 0.3);
  }
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.post-category {
  color: #4a9eff;
  font-weight: 500;
}

.post-title {
  margin: 0 0 1rem 0;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #4a9eff;
    }
  }
}

.post-excerpt {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-tag {
  background: rgba(74, 158, 255, 0.1);
  color: #4a9eff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .blog-container {
    padding: 1rem;
  }

  .category-nav {
    justify-content: center;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const postCards = document.querySelectorAll('.post-card');

  function filterPosts(category) {
    postCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 更新按钮状态
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 过滤文章
      filterPosts(btn.dataset.category);
    });
  });
});
</script>
