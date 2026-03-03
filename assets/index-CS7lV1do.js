(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const u={Q1:{id:"Q1",text:"您家厨房的安装环境如何？",answers:[{id:"A1",text:"不装橱柜，挂墙上(外挂式)",type:"next_question",nextQuestionId:"Q2"},{id:"A2",text:"要做橱柜，能看到烟机的操作面板",type:"next_question",nextQuestionId:"Q3"},{id:"A3",text:"藏橱柜里，不用就看不到",type:"show_product",product:{name:"EMG9069G",description:"全隐藏式油烟机",media:[{type:"image",url:"/油烟机9069G.jpg"},{type:"image",url:"/9069g-1.jpg"},{type:"image",url:"/9069g-2.jpg"},{type:"image",url:"/9069g-3.jpg"},{type:"image",url:"/9069g-4.jpg"},{type:"image",url:"/9069g-5.jpg"},{type:"image",url:"/9069g-6.jpg"},{type:"video",url:"/9069g-demo.mp4"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://qkitchen.co.nz/product/694480f9a489d31a6db348f1/"}},{id:"A4",text:"仅60cm宽的，外挂入柜都看这条",type:"show_product",product:{name:"EMG60系列",description:"60cm超窄机身，小空间首选",media:[{type:"image",url:"/6018.jpg"},{type:"image",url:"/6018W.jpg"},{type:"image",url:"/6020Y.jpg"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://search.jd.com/Search?keyword=方太6018油烟机"}}]},Q2:{id:"Q2",text:"您对油烟机的期待？",answers:[{id:"A5",text:"经常爆炒，油烟多，要排烟猛还不吵",type:"show_product",product:{name:"9050系列",description:"大吸力，适合爆炒，静音设计",media:[{type:"image",url:"/油烟机9050.jpg"},{type:"image",url:"/油烟机9050Y.jpg"},{type:"image",url:"/9050_4.jpg"},{type:"image",url:"/9050Y_2.jpg"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://search.jd.com/Search?keyword=方太9050油烟机"}},{id:"A6",text:"做饭不碰头 + 离油烟更近，适合开放式厨房",type:"show_product",product:{name:"侧吸式",description:"吸烟距离近，开放式厨房理想选择",media:[{type:"image",url:"/油烟机9009X.jpg"},{type:"image",url:"/油烟机9039.jpg"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://search.jd.com/Search?keyword=方太侧吸油烟机"}},{id:"A7",text:"极简主义设计, 简约实用",type:"next_question",nextQuestionId:"Q3"}]},Q3:{id:"Q3",text:"除了极简，还想要？",answers:[{id:"A8",text:"美观静音，排烟效果强，功能全",type:"show_product",product:{name:"EMG9060",description:"全功能油烟机，静音高效",media:[{type:"image",url:"/油烟机9060.jpg"},{type:"image",url:"/9060_1.jpg"},{type:"image",url:"/9060_4.jpg"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://search.jd.com/Search?keyword=方太9060油烟机"}},{id:"A9",text:"吸力足，追求性价比",type:"show_product",product:{name:"EMG9063G / EMG9008",description:"高性价比，吸力强劲",media:[{type:"image",url:"/油烟机9063G.jpg"},{type:"image",url:"/油烟机9008.jpg"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://search.jd.com/Search?keyword=方太9063G油烟机"}},{id:"A10",text:"满足基本需求，稳定耐用",type:"show_product",product:{name:"EMS9028S",description:"基础款，稳定可靠",media:[{type:"image",url:"/油烟机9028S.jpg"}],posterImages:["/海报图1.jpg"],shoppingUrl:"https://search.jd.com/Search?keyword=方太9028S油烟机"}}]}},g="Q1";function x(e,o){const r=e.answers.map(s=>`
      <button 
        class="answer-button w-full p-4 text-left bg-white/90 backdrop-blur-sm rounded-xl border-2 border-transparent hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        data-answer-id="${s.id}"
        data-answer-type="${s.type}"
      >
        <div class="flex items-center justify-between">
          <span class="text-lg font-medium text-gray-800">${s.text}</span>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </button>
    `).join("");return`
    <div class="question-card fade-in">
      <!-- 标题 -->
      <div class="app-title">
        方太油烟机小助手
      </div>
      
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900">${e.text}</h2>
      </div>
      <div class="answers-container space-y-4">
        ${r}
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
  `}function f(){const e=typeof import.meta<"u"&&"/"||"";return e==="/"?"":e}function b(e,o){const r=e.media.length>1,s=f(),t=["四面八方不跑烟。","最好的面膜，是方太油烟机。","炒菜有方太，除油烟更要有方太。","懂烟机，更懂呼吸。","别让油烟伤了家人的肺。","强力吸，更安静。","别让你的梦想，被油烟熏黑。"];return`
    <div class="product-card fade-in">
      <!-- 店铺公告文本框（右上角） -->
      <div class="shop-notice-box">
        <div class="notice-content">
          <div class="notice-title"></div>
          <div class="notice-text">
            ${t[Math.floor(Math.random()*t.length)]}
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
        <h2 class="text-xl font-bold text-gray-900 mb-1">${e.name}</h2>
        <p class="product-description text-gray-600 text-sm">${e.description}</p>
      </div>

      <!-- 媒体轮播区域（弹性伸缩，占据剩余空间） -->
      <div class="carousel-container" data-current-index="0" data-has-multiple="${r}">
        <div class="carousel-track">
          ${e.media.map((i,a)=>i.type==="image"?`
                <div class="carousel-slide" data-index="${a}">
                  <img 
                    src="${s}${i.url}"
                    alt="${e.name} - 图片${a+1}"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder\\'><svg class=\\'w-16 h-16\\' fill=\\'none\\' stroke=\\'currentColor\\' viewBox=\\'0 0 24 24\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\'></path></svg><p>${i.url}</p></div>'"
                  />
                </div>
              `:i.type==="video"?`
                <div class="carousel-slide video-slide" data-index="${a}">
                  <video 
                    src="${s}${i.url}"
                    controls 
                    playsinline
                    preload="metadata"
                  ></video>
                </div>
              `:"").join("")}
        </div>

        <!-- 左右箭头（仅多媒体显示） -->
        ${r?`
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
        `:""}

        <!-- 指示器点（仅多媒体显示） -->
        ${r?`
          <div class="carousel-dots">
            ${e.media.map((i,a)=>`
              <button class="carousel-dot ${a===0?"active":""}" data-index="${a}"></button>
            `).join("")}
          </div>
        `:""}
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
          <div class="poster-carousel" data-current-index="0" data-has-multiple="${e.posterImages&&e.posterImages.length>1}">
            <div class="poster-carousel-track">
              ${e.posterImages&&e.posterImages.length>0?e.posterImages.map((i,a)=>`
                <div class="poster-carousel-slide" data-index="${a}">
                  <img
                    src="${s}${i}"
                    alt="海报${a+1}"
                    class="poster-image"
                    onerror="this.style.display='none';"
                  />
                </div>
              `).join(""):""}
            </div>
            <!-- 左右箭头（仅多张海报显示） -->
            ${e.posterImages&&e.posterImages.length>1?`
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
            `:""}
            <!-- 指示器点（仅多张海报显示） -->
            ${e.posterImages&&e.posterImages.length>1?`
              <div class="poster-carousel-dots">
                ${e.posterImages.map((i,a)=>`
                  <button class="poster-carousel-dot ${a===0?"active":""}" data-index="${a}" onclick="window.dispatchEvent(new CustomEvent('poster-go-to', {detail: ${a}}))"></button>
                `).join("")}
              </div>
            `:""}
          </div>
          <!-- 无海报时的占位符 -->
          ${!e.posterImages||e.posterImages.length===0?`
            <div class="poster-image-placeholder">
              <svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p class="text-gray-400 text-sm mt-2">海报图片位置</p>
            </div>
          `:""}
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
  `}const l={currentQuestionId:g,currentProduct:null,history:[]};function w(){const e=document.getElementById("app");if(!e){console.error("App element not found");return}y(),d(),e.addEventListener("click",j),v()}function v(){let e=0,o=0;const r=50;document.addEventListener("touchstart",t=>{e=t.touches[0].clientX},{passive:!0}),document.addEventListener("touchend",t=>{o=t.changedTouches[0].clientX,s()},{passive:!0});function s(){const t=document.querySelector(".carousel-container");if(!t||t.getAttribute("data-has-multiple")!=="true")return;const n=e-o;n>r?m():n<-r&&h()}}function y(){const e=document.createElement("style");e.textContent=`
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
      background: rgb(230, 230, 230);
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
  `,document.head.appendChild(e)}function d(){const e=document.getElementById("app");if(!e)return;let o="";if(l.currentProduct)o=b(l.currentProduct),e.classList.add("showing-product");else if(l.currentQuestionId){const r=u[l.currentQuestionId];r&&(o=x(r)),e.classList.remove("showing-product")}e.innerHTML=`
    <div class="container">
      ${o}
    </div>
  `}function k(e){const o=u[l.currentQuestionId];if(!o)return;const r=o.answers.find(s=>s.id===e);r&&(r.type==="next_question"&&r.nextQuestionId?(l.history.push(l.currentQuestionId),l.currentQuestionId=r.nextQuestionId,d()):r.type==="show_product"&&r.product&&(l.currentProduct=r.product,l.currentQuestionId=null,d()))}function j(e){const o=e.target,r=o.closest(".answer-button");if(r){const n=r.getAttribute("data-answer-id");n&&k(n);return}if(o.closest(".restart-button")){$();return}const t=o.closest(".carousel-dot");if(t){const n=parseInt(t.getAttribute("data-index")||"0");c(n);return}}function c(e){const o=document.querySelector(".carousel-track"),r=document.querySelector(".carousel-container");if(!o||!r)return;const s=document.querySelectorAll(".carousel-slide").length;parseInt(r.getAttribute("data-current-index")||"0"),e<0?e=s-1:e>=s&&(e=0),document.querySelectorAll("video").forEach(t=>t.pause()),o.style.transform=`translateX(-${e*100}%)`,r.setAttribute("data-current-index",e.toString()),document.querySelectorAll(".carousel-dot").forEach((t,n)=>{t.classList.toggle("active",n===e)})}function h(){const e=document.querySelector(".carousel-container"),o=parseInt(e?.getAttribute("data-current-index")||"0");c(o-1)}function m(){const e=document.querySelector(".carousel-container"),o=parseInt(e?.getAttribute("data-current-index")||"0");c(o+1)}window.addEventListener("carousel-prev",()=>{h()});window.addEventListener("carousel-next",()=>{m()});window.addEventListener("show-poster",()=>{const e=document.getElementById("poster-modal");e&&(e.style.display="block",document.body.style.overflow="hidden")});function p(e){const o=document.querySelector(".poster-carousel-track"),r=document.querySelector(".poster-carousel");if(!o||!r)return;const s=document.querySelectorAll(".poster-carousel-slide").length;parseInt(r.getAttribute("data-current-index")||"0"),e<0?e=s-1:e>=s&&(e=0),o.style.transform=`translateX(-${e*100}%)`,r.setAttribute("data-current-index",e.toString()),document.querySelectorAll(".poster-carousel-dot").forEach((t,n)=>{t.classList.toggle("active",n===e)})}function I(){const e=document.querySelector(".poster-carousel"),o=parseInt(e?.getAttribute("data-current-index")||"0");p(o-1)}function S(){const e=document.querySelector(".poster-carousel"),o=parseInt(e?.getAttribute("data-current-index")||"0");p(o+1)}window.addEventListener("poster-prev",()=>{I()});window.addEventListener("poster-next",()=>{S()});window.addEventListener("poster-go-to",e=>{e.detail!==void 0&&p(e.detail)});function $(){l.currentQuestionId=g,l.currentProduct=null,l.history=[],d()}w();
