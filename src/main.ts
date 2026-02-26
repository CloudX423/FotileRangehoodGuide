import { questionData, START_QUESTION_ID } from './data';
import { Question, Answer } from './types';
import { renderQuestion, renderProduct } from './components';

// 应用状态
type AppState = {
  currentQuestionId: string | null;
  currentProduct: any | null;
  history: string[]; // 记录问题ID的历史，用于可能的返回功能
};

const appState: AppState = {
  currentQuestionId: START_QUESTION_ID,
  currentProduct: null,
  history: []
};

export function initApp(): void {
  const app = document.getElementById('app');

  if (!app) {
    console.error('App element not found');
    return;
  }

  // 添加全局样式
  addGlobalStyles();

  // 渲染初始问题
  renderApp();

  // 添加事件委托
  app.addEventListener('click', handleAppClick);

  // 添加触摸滑动支持
  setupTouchSwipe();
}

// 设置触摸滑动
function setupTouchSwipe(): void {
  let startX = 0;
  let endX = 0;
  const threshold = 50; // 滑动阈值

  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    
    // 只在多图模式下启用滑动
    if (!carouselContainer || carouselContainer.getAttribute('data-has-multiple') !== 'true') {
      return;
    }

    const diff = startX - endX;

    if (diff > threshold) {
      // 向左滑动，显示下一张
      nextSlide();
    } else if (diff < -threshold) {
      // 向右滑动，显示上一张
      prevSlide();
    }
  }
}

// 添加全局样式
function addGlobalStyles(): void {
  const style = document.createElement('style');
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      overflow: hidden; /* 禁止页面滚动 */
    }
    
    #app {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .container {
      width: 100%;
      max-width: 600px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    /* 产品页面专用布局 - Flex-Fit策略 */
    #app.showing-product {
      padding: 12px;
      align-items: stretch;
    }
    
    #app.showing-product .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding: 20px;
      border-radius: 16px;
      max-height: calc(100vh - 24px);
    }
    
    /* 禁止产品页面内滚动 */
    #app.showing-product .container {
      overflow: hidden;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in {
      animation: fadeIn 0.4s ease-out;
    }
  `;
  document.head.appendChild(style);
}

// 渲染应用
function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  let content = '';

  if (appState.currentProduct) {
    // 显示产品卡片
    content = renderProduct(appState.currentProduct, restartApp);
    app.classList.add('showing-product');
  } else if (appState.currentQuestionId) {
    // 显示问题卡片
    const question = questionData[appState.currentQuestionId];
    if (question) {
      content = renderQuestion(question, handleAnswerClick);
    }
    app.classList.remove('showing-product');
  }

  app.innerHTML = `
    <div class="container">
      ${content}
    </div>
  `;
}

// 处理答案点击
function handleAnswerClick(answerId: string): void {
  const currentQuestion = questionData[appState.currentQuestionId!];
  if (!currentQuestion) return;

  const answer = currentQuestion.answers.find(a => a.id === answerId);
  if (!answer) return;

  if (answer.type === 'next_question' && answer.nextQuestionId) {
    // 跳转到下一个问题
    appState.history.push(appState.currentQuestionId!);
    appState.currentQuestionId = answer.nextQuestionId;
    renderApp();
  } else if (answer.type === 'show_product' && answer.product) {
    // 显示产品
    appState.currentProduct = answer.product;
    appState.currentQuestionId = null;
    renderApp();
  }
}

// 处理应用点击事件（事件委托）
function handleAppClick(event: Event): void {
  const target = event.target as HTMLElement;
  
  // 检查是否点击了答案按钮
  const answerButton = target.closest('.answer-button');
  if (answerButton) {
    const answerId = answerButton.getAttribute('data-answer-id');
    if (answerId) {
      handleAnswerClick(answerId);
    }
    return;
  }
  
  // 检查是否点击了重新开始按钮
  const restartButton = target.closest('.restart-button');
  if (restartButton) {
    restartApp();
    return;
  }

  // 检查是否点击了轮播指示器点
  const carouselDot = target.closest('.carousel-dot');
  if (carouselDot) {
    const index = parseInt(carouselDot.getAttribute('data-index') || '0');
    goToSlide(index);
    return;
  }
}

// 轮播相关函数
function goToSlide(index: number): void {
  const carouselTrack = document.querySelector('.carousel-track') as HTMLElement;
  const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
  
  if (!carouselTrack || !carouselContainer) return;

  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  const currentIndex = parseInt(carouselContainer.getAttribute('data-current-index') || '0');

  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;

  // 暂停所有视频（切换前）
  document.querySelectorAll('video').forEach(v => v.pause());

  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
  carouselContainer.setAttribute('data-current-index', index.toString());

  // 更新指示器点
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function prevSlide(): void {
  const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
  const currentIndex = parseInt(carouselContainer?.getAttribute('data-current-index') || '0');
  goToSlide(currentIndex - 1);
}

function nextSlide(): void {
  const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
  const currentIndex = parseInt(carouselContainer?.getAttribute('data-current-index') || '0');
  goToSlide(currentIndex + 1);
}

// 监听轮播自定义事件
window.addEventListener('carousel-prev', () => {
  prevSlide();
});

window.addEventListener('carousel-next', () => {
  nextSlide();
});

// 重新开始
function restartApp(): void {
  appState.currentQuestionId = START_QUESTION_ID;
  appState.currentProduct = null;
  appState.history = [];
  renderApp();
}
