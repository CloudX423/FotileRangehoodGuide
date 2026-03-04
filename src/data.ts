import { Question } from './types';

// 问答数据
export const questionData: Record<string, Question> = {
  'Q1': {
    id: 'Q1',
    text: '您家厨房的安装环境如何？',
    answers: [
      {
        id: 'A1',
        text: '不装橱柜，挂墙上(外挂式)',
        type: 'next_question',
        nextQuestionId: 'Q2'
      },
      {
        id: 'A2',
        text: '要做橱柜，能看到烟机的操作面板',
        type: 'next_question',
        nextQuestionId: 'Q3'
      },
      {
        id: 'A3',
        text: '藏橱柜里，不用就看不到',
        type: 'show_product',
        product: {
          name: 'EMG9069G',
          description: '全隐藏式油烟机',
          media: [
            // 按 1-8 顺序展示：7 张图片 + 1 个视频（封面就是 1）
            { type: 'image', url: '/assets/9069G/油烟机9069G1.jpg' },
            { type: 'image', url: '/assets/9069G/油烟机9069G2.jpg' },
            { type: 'image', url: '/assets/9069G/油烟机9069G3.jpg' },
            { type: 'image', url: '/assets/9069G/油烟机9069G4.jpg' },
            { type: 'image', url: '/assets/9069G/油烟机9069G5.jpg' },
            { type: 'image', url: '/assets/9069G/油烟机9069G6.jpg' },
            { type: 'image', url: '/assets/9069G/油烟机9069G7.jpg' },
            { type: 'video', url: '/assets/9069G/油烟机9069G8.mp4' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://qkitchen.co.nz/product/694480f9a489d31a6db348f1/'
        }
      },
      {
        id: 'A4',
        text: '仅60cm宽的，外挂入柜都看这条',
        type: 'show_product',
        product: {
          name: 'EMG60系列',
          description: '60cm超窄机身，小空间首选',
          media: [
            { type: 'image', url: '/6018.jpg' },
            { type: 'image', url: '/6018W.jpg' },
            { type: 'image', url: '/6020Y.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=方太6018油烟机'
        }
      }
    ]
  },
  'Q2': {
    id: 'Q2',
    text: '您对油烟机的期待？',
    answers: [
      {
        id: 'A5',
        text: '经常爆炒，油烟多，要排烟猛还不吵',
        type: 'show_product',
        product: {
          name: '9050系列',
          description: '大吸力，适合爆炒，静音设计',
          media: [
            { type: 'image', url: '/油烟机9050.jpg' },
            { type: 'image', url: '/油烟机9050Y.jpg' },
            { type: 'image', url: '/9050_4.jpg' },
            { type: 'image', url: '/9050Y_2.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=方太9050油烟机'
        }
      },
      {
        id: 'A6',
        text: '做饭不碰头 + 离油烟更近，适合开放式厨房',
        type: 'show_product',
        product: {
          name: '侧吸式',
          description: '吸烟距离近，开放式厨房理想选择',
          media: [
            { type: 'image', url: '/油烟机9009X.jpg' },
            { type: 'image', url: '/油烟机9039.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=方太侧吸油烟机'
        }
      },
      {
        id: 'A7',
        text: '极简主义设计, 简约实用',
        type: 'next_question',
        nextQuestionId: 'Q3'
      }
    ]
  },
  'Q3': {
    id: 'Q3',
    text: '除了极简，还想要？',
    answers: [
      {
        id: 'A8',
        text: '美观静音，排烟效果强，功能全',
        type: 'show_product',
        product: {
          name: 'EMG9060',
          description: '全功能油烟机，静音高效',
          media: [
            { type: 'image', url: '/油烟机9060.jpg' },
            { type: 'image', url: '/9060_1.jpg' },
            { type: 'image', url: '/9060_4.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=方太9060油烟机'
        }
      },
      {
        id: 'A9',
        text: '吸力足，追求性价比',
        type: 'show_product',
        product: {
          name: 'EMG9063G / EMG9008',
          description: '高性价比，吸力强劲',
          media: [
            { type: 'image', url: '/油烟机9063G.jpg' },
            { type: 'image', url: '/油烟机9008.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=方太9063G油烟机'
        }
      },
      {
        id: 'A10',
        text: '满足基本需求，稳定耐用',
        type: 'show_product',
        product: {
          name: 'EMS9028S',
          description: '基础款，稳定可靠',
          media: [{ type: 'image', url: '/油烟机9028S.jpg' }],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=方太9028S油烟机'
        }
      }
    ]
  }
};

// 起始问题
export const START_QUESTION_ID = 'Q1';
