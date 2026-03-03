import { Question, ProductInfo } from './types';

// 渲染问题卡片
export function renderQuestion(question: Question, onAnswerClick: (answerId: string) => void): string {
  const answersHtml = question.answers
    .map(answer => `
      <button 
        class="answer-button w-full p-4 text-left bg-white/90 backdrop-blur-sm rounded-xl border-2 border-transparent hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        data-answer-id="${answer.id}"
        data-answer-type="${answer.type}"
      >
        <div class="flex items-center justify-between">
          <span class="text-lg font-medium text-gray-800">${answer.text}</span>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </button>
    `)
    .join('');

  return `
    <div class="question-card fade-in">
      <!-- 标题 -->
      <div class="app-title">
        方太油烟机小助手
      </div>
      
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900">${question.text}</h2>
      </div>
      <div class="answers-container space-y-4">
        ${answersHtml}
      </div>
    </div>

    <style>
      .app-title {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 2px solid rgba(102, 126, 234, 0.2);
      }
    </style>
  `;
}

// 渲染产品卡片
export function renderProduct(product: ProductInfo, onRestartClick: () => void): string {
  const hasMultipleMedia = product.media.length > 1;

  // 随机选择一句宣传语
  const slogans = [
    '四面八方不跑烟。',
    '最好的面膜，是方太油烟机。',
    '炒菜有方太，除油烟更要有方太。',
    '懂烟机，更懂呼吸。',
    '别让油烟伤了家人的肺。',
    '强力吸，更安静。',
    '别让你的梦想，被油烟熏黑。'
  ];
  const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];

  return `
    <div class="product-card fade-in">
      <!-- 店铺公告文本框（右上角） -->
      <div class="shop-notice-box">
        <div class="notice-content">
          <div class="notice-title"></div>
          <div class="notice-text">
            ${randomSlogan}
          </div>
          
          <div class="notice-text">
          </div>
        </div>
      </div>

      <!-- 产品信息框（固定在上方，不允许压缩） -->
      <div class="product-info-box">
        <span class="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full mb-2">
          推荐产品
        </span>
        <h2 class="text-xl font-bold text-gray-900 mb-1">${product.name}</h2>
        <p class="product-description text-gray-600 text-sm">${product.description}</p>
      </div>

      <!-- 媒体轮播区域（弹性伸缩，占据剩余空间） -->
      <div class="carousel-container" data-current-index="0" data-has-multiple="${hasMultipleMedia}">
        <div class="carousel-track">
          ${product.media.map((mediaItem, index) => {
            if (mediaItem.type === 'image') {
              return `
                <div class="carousel-slide" data-index="${index}">
                  <img 
                    src="${mediaItem.url}" 
                    alt="${product.name} - 图片${index + 1}"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder\\'><svg class=\\'w-16 h-16\\' fill=\\'none\\' stroke=\\'currentColor\\' viewBox=\\'0 0 24 24\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\'></path></svg><p>${mediaItem.url}</p></div>'"
                  />
                </div>
              `;
            } else if (mediaItem.type === 'video') {
              return `
                <div class="carousel-slide video-slide" data-index="${index}">
                  <video 
                    src="${mediaItem.url}" 
                    controls 
                    playsinline
                    preload="metadata"
                  ></video>
                </div>
              `;
            }
            return '';
          }).join('')}
        </div>

        <!-- 左右箭头（仅多媒体显示） -->
        ${hasMultipleMedia ? `
          <button class="carousel-arrow carousel-arrow-prev" onclick="window.dispatchEvent(new CustomEvent('carousel-prev'))">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button class="carousel-arrow carousel-arrow-next" onclick="window.dispatchEvent(new CustomEvent('carousel-next'))">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        ` : ''}

        <!-- 指示器点（仅多媒体显示） -->
        ${hasMultipleMedia ? `
          <div class="carousel-dots">
            ${product.media.map((_, index) => `
              <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- 按钮区域（底部，不允许压缩，左右布局） -->
      <div class="button-wrapper">
        <div class="button-row">
          <button 
            class="shopping-button flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-300 text-center flex items-center justify-center gap-2"
            onclick="window.dispatchEvent(new CustomEvent('show-poster'))"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            这是我要的
          </button>
          <button 
            class="restart-button flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
          >
            我再看看
          </button>
        </div>
      </div>

      <!-- 海报弹窗容器 -->
      <div id="poster-modal" class="poster-modal" style="display: none;">
        <div class="poster-overlay" onclick="document.getElementById('poster-modal').style.display='none'"></div>
        <div class="poster-content">
          <button class="poster-close" onclick="document.getElementById('poster-modal').style.display='none'">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <!-- 海报轮播区域 -->
          <div class="poster-carousel" data-current-index="0" data-has-multiple="${(product.posterImages && product.posterImages.length > 1)}">
            <div class="poster-carousel-track">
              ${product.posterImages && product.posterImages.length > 0 ? product.posterImages.map((imgUrl, index) => `
                <div class="poster-carousel-slide" data-index="${index}">
                  <img
                    src="${imgUrl}"
                    alt="海报${index + 1}"
                    class="poster-image"
                    onerror="this.style.display='none';"
                  />
                </div>
              `).join('') : ''}
            </div>
            <!-- 左右箭头（仅多张海报显示） -->
            ${(product.posterImages && product.posterImages.length > 1) ? `
              <button class="poster-carousel-arrow poster-carousel-arrow-prev" onclick="window.dispatchEvent(new CustomEvent('poster-prev'))">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button class="poster-carousel-arrow poster-carousel-arrow-next" onclick="window.dispatchEvent(new CustomEvent('poster-next'))">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            ` : ''}
            <!-- 指示器点（仅多张海报显示） -->
            ${(product.posterImages && product.posterImages.length > 1) ? `
              <div class="poster-carousel-dots">
                ${product.posterImages.map((_, index) => `
                  <button class="poster-carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="window.dispatchEvent(new CustomEvent('poster-go-to', {detail: ${index}}))"></button>
                `).join('')}
              </div>
            ` : ''}
          </div>
          <!-- 无海报时的占位符 -->
          ${(!product.posterImages || product.posterImages.length === 0) ? `
            <div class="poster-image-placeholder">
              <svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p class="text-gray-400 text-sm mt-2">海报图片位置</p>
            </div>
          ` : ''}
        </div>
      </div>
    </div>

    <style>
      /* 产品卡片 - Flex-Fit布局 */
      .product-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
        position: relative; /* 为绝对定位提供参考 */
      }

      /* 店铺公告文本框 - 右上角 */
      .shop-notice-box {
        position: absolute;
        top: 4px;
        right: 4px;
        z-index: 10;
        max-width: 90%;
        width: auto;
      }

      .notice-content {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(102, 126, 234, 0.3);
        border-radius: 12px;
        padding: 9px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: fit-content;
        min-width: 200px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .notice-title {
        font-size: 14px;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 4px;
        padding-bottom: 4px;
      }

      .notice-text {
        font-size: 16px;
        color: #4b5563;
        line-height: 1.5;
        margin-bottom: 4px;
        text-align: center;
      }

      .notice-text:last-child {
        margin-bottom: 0;
      }

      /* 产品信息框 - 不允许压缩 */
      .product-info-box {
        flex-shrink: 0;
        padding: 0 0 12px 0;
      }

      /* 产品描述 - 限制最多2行 */
      .product-description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.4;
      }

      /* 轮播容器 - 弹性伸缩，占据剩余空间 */
      .carousel-container {
        position: relative;
        flex: 1;
        min-height: 0;
        width: 100%;
        overflow: hidden;
        background: #F9F9F9;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
      }

      /* 轮播轨道 */
      .carousel-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-out;
      }

      /* 轮播幻灯片 */
      .carousel-slide {
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F9F9F9;
      }

      /* 图片 - 完整显示，不裁剪 */
      .carousel-slide img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        object-position: center;
      }

      /* 视频幻灯片 */
      .video-slide {
        background: #F9F9F9;
      }

      .video-slide video {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        object-position: center;
      }

      /* 占位符样式 */
      .placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #F9F9F9;
      }

      .placeholder svg {
        color: #9ca3af;
        margin-bottom: 10px;
      }

      .placeholder p {
        color: #6b7280;
        font-size: 14px;
        text-align: center;
        padding: 0 20px;
      }

      /* 左右箭头 */
      .carousel-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        z-index: 5;
        transition: background 0.3s;
      }

      .carousel-arrow:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      .carousel-arrow-prev {
        left: 10px;
      }

      .carousel-arrow-next {
        right: 10px;
      }

      /* 指示器点 */
      .carousel-dots {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 5;
      }

      .carousel-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.3s;
      }

      .carousel-dot.active {
        width: 20px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.6);
      }

      /* 按钮区域 - 不允许压缩 */
      .button-wrapper {
        flex-shrink: 0;
        padding-top: 4px;
        padding-bottom: env(safe-area-inset-bottom);
      }

      /* 按钮行 - 左右布局 */
      .button-row {
        display: flex;
        gap: 12px;
      }

      /* 重新开始按钮 - 占据剩余空间 */
      .restart-button {
        flex: 1;
      }

      /* 购物按钮 - 占据剩余空间 */
      .shopping-button {
        flex: 1;
        text-decoration: none;
      }

      /* 禁止单图时的滑动 */
      .carousel-container:not([data-has-multiple="true"]) {
        cursor: default;
      }

      /* 海报弹窗样式 */
      .poster-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: none;
        animation: fadeIn 0.3s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      /* 半透明遮罩 */
      .poster-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
      }

      /* 海报内容区域 */
      .poster-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 90%;
        background: white;
        border-radius: 16px;
        overflow: visible;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease-out;
      }

      @keyframes slideIn {
        from {
          transform: translate(-50%, -50%) scale(0.9);
          opacity: 0;
        }
        to {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }

      /* 关闭按钮 */
      .poster-close {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        z-index: 10;
        transition: background 0.3s;
      }

      .poster-close:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      /* 海报图片占位区域 */
      .poster-image-placeholder {
        width: 450px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #F3F4F6;
        border: 2px dashed #D1D5DB;
        border-radius: 8px;
        margin: 16px;
      }

      /* 海报轮播容器 */
      .poster-carousel {
        position: relative;
        width: min(85vw, 450px);
        height: auto;
        overflow: hidden;
        margin: 0;
        background: #fff;
      }

      /* 海报轮播轨道 */
      .poster-carousel-track {
        display: flex;
        width: 100%;
        transition: transform 0.3s ease-out;
      }

      /* 海报轮播滑块 */
      .poster-carousel-slide {
        flex: 0 0 100%;
        width: 100%;
        height: auto;
        position: relative;
        background: #fff;
      }

      /* 海报图片 */
      .poster-image {
        width: 100%;
        height: auto;
        display: block;
      }

      /* 海报轮播箭头 */
      .poster-carousel-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        z-index: 5;
        transition: background 0.3s;
      }

      .poster-carousel-arrow:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      .poster-carousel-arrow-prev {
        left: 8px;
      }

      .poster-carousel-arrow-next {
        right: 8px;
      }

      /* 海报轮播指示器点 */
      .poster-carousel-dots {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 5;
      }

      .poster-carousel-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.3s;
      }

      .poster-carousel-dot.active {
        width: 24px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.6);
      }

      /* 禁止单图时的滑动 */
      .poster-carousel:not([data-has-multiple="true"]) {
        cursor: default;
      }
    </style>
  `;
}
