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
          name: '9069G',
          description: '全隐藏式油烟机',
          media: [
            { type: 'image', url: '/9069g-1.jpg' },
            { type: 'image', url: '/9069g-2.jpg' },
            { type: 'image', url: '/9069g-3.jpg' },
            { type: 'image', url: '/9069g-4.jpg' },
            { type: 'image', url: '/9069g-5.jpg' },
            { type: 'image', url: '/9069g-6.jpg' },
            { type: 'video', url: '/9069g-demo.mp4' }
          ]
        }
      },
      {
        id: 'A4',
        text: '仅60cm宽的，外挂入柜都看这条',
        type: 'show_product',
        product: {
          name: '6018 & 6018W & 6020Y',
          description: '60cm超窄机身，小空间首选',
          media: [{ type: 'image', url: '6018系列产品图' }]
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
          description: '大吸力油烟机，适合爆炒，静音设计',
          media: [{ type: 'image', url: '9050系列产品图' }]
        }
      },
      {
        id: 'A6',
        text: '做饭不碰头 + 吸得近，吸力足，适合开放式厨房',
        type: 'show_product',
        product: {
          name: '侧吸/半侧吸',
          description: '侧吸式设计，吸烟距离近，开放式厨房理想选择',
          media: [{ type: 'image', url: '侧吸产品图' }]
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
          name: '9060',
          description: '全功能油烟机，静音高效，设计简约',
          media: [{ type: 'image', url: '9060产品图' }]
        }
      },
      {
        id: 'A9',
        text: '吸力足，追求性价比',
        type: 'show_product',
        product: {
          name: '9063G/9008',
          description: '高性价比油烟机，吸力强劲',
          media: [{ type: 'image', url: '9063G/9008产品图' }]
        }
      },
      {
        id: 'A10',
        text: '满足基本需求，稳定耐用',
        type: 'show_product',
        product: {
          name: '9028S',
          description: '基础款油烟机，稳定可靠',
          media: [{ type: 'image', url: '9028S产品图' }]
        }
      }
    ]
  }
};

// 起始问题
export const START_QUESTION_ID = 'Q1';
