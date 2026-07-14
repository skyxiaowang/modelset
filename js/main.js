// ========== CCVIBE Main JavaScript ==========

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initMobileMenu();
  initHeaderScroll();
  initModelTabs();
  initFAQ();
  initReveal();
  initSmoothScroll();
  initParticles();
  animateCounters();
});

// ========== 移动端菜单 ==========
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const icon = toggle.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', menu.classList.contains('hidden') ? 'menu' : 'x');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      const icon = toggle.querySelector('[data-lucide]');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  });
}

// ========== 导航栏滚动效果 ==========
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }
  }, { passive: true });
}

// ========== 模型标签切换 ==========
function initModelTabs() {
  const tabs = document.querySelectorAll('.model-tab');
  const panels = document.querySelectorAll('.model-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(panel => {
        if (panel.dataset.panel === target) {
          panel.classList.remove('hidden');
          panel.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            requestAnimationFrame(() => el.classList.add('visible'));
          });
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

// ========== FAQ 手风琴 ==========
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    if (!toggle || !answer) return;

    toggle.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          other.querySelector('.faq-answer')?.classList.remove('open');
        }
      });

      item.classList.toggle('active', !isOpen);
      answer.classList.toggle('open', !isOpen);
    });
  });
}

// ========== 滚动渐入动画 ==========
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========== 平滑滚动 ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerH = document.getElementById('header')?.offsetHeight || 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - headerH - 20,
        behavior: 'smooth'
      });
    });
  });
}

// ========== 粒子背景 ==========
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;
      animation-duration:${Math.random()*20+15}s;
      animation-delay:${Math.random()*15}s;
      opacity:${Math.random()*0.3+0.1};
    `;
    container.appendChild(p);
  }
}

// ========== 数字计数动画 ==========
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseFloat(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            counter.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
            else counter.textContent = target + suffix;
          };
          requestAnimationFrame(update);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
  });
}
