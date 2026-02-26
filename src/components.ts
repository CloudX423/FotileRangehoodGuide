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
        方太油烟机选型小助手
      </div>
      
      <div class="mb-6">
        <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
          问题
        </span>
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

  return `
    <div class="product-card fade-in">
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

      <!-- 重新开始按钮（底部，不允许压缩） -->
      <div class="button-wrapper">
        <button 
          class="restart-button w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
        >
          重新开始选择
        </button>
      </div>
    </div>

    <style>
      /* 产品卡片 - Flex-Fit布局 */
      .product-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
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

      /* 禁止单图时的滑动 */
      .carousel-container:not([data-has-multiple="true"]) {
        cursor: default;
      }
    </style>
  `;
}
