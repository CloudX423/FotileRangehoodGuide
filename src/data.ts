import { Question } from './types';

export const questionData: Record<string, Question> = {
  'Q1': {
    id: 'Q1',
    text: 'What is your kitchen installation environment?',
    answers: [
      {
        id: 'A1',
        text: 'No cabinet, wall-mounted',
        type: 'next_question',
        nextQuestionId: 'Q2'
      },
      {
        id: 'A2',
        text: 'With cabinet, control panel visible',
        type: 'next_question',
        nextQuestionId: 'Q3'
      },
      {
        id: 'A3',
        text: 'Hidden in cabinet, invisible when not in use',
        type: 'show_product',
        product: {
          name: 'EMG9069G',
          description: 'Fully hidden range hood',
          media: [
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
        text: 'Only 60cm wide, wall-mounted or built-in',
        type: 'show_product',
        product: {
          name: 'EMG60 Series',
          description: '60cm ultra-narrow body, perfect for small spaces',
          media: [
            { type: 'image', url: '/6018.jpg' },
            { type: 'image', url: '/6018W.jpg' },
            { type: 'image', url: '/6020Y.jpg' },
            { type: 'image', url: '/6018_003.jpg' },
            { type: 'image', url: '/6018_002.png' },
            { type: 'image', url: '/6020Y_001.png' },
            { type: 'image', url: '/6020Y_002.png' },
            { type: 'image', url: '/6018W_001.png' },
            { type: 'image', url: '/6018W_002.png' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=6018%20range%20hood'
        }
      }
    ]
  },
  'Q2': {
    id: 'Q2',
    text: 'What are your expectations for the range hood?',
    answers: [
      {
        id: 'A5',
        text: 'Frequent stir-frying, heavy smoke, powerful suction and quiet',
        type: 'show_product',
        product: {
          name: '9050 Series',
          description: 'Powerful suction, ideal for stir-frying, quiet design',
          media: [
            { type: 'image', url: '/油烟机9050.jpg' },
            { type: 'image', url: '/油烟机9050Y.jpg' },
            { type: 'image', url: '/9050_4.jpg' },
            { type: 'image', url: '/9050Y_2.jpg' },
            { type: 'image', url: '/9050Y_002.jpg' },
            { type: 'image', url: '/9050_002.jpg' },
            { type: 'image', url: '/9050Y_003.jpg' },
            { type: 'image', url: '/9050_003.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=9050%20range%20hood'
        }
      },
      {
        id: 'A6',
        text: 'No head bumping + closer to smoke, ideal for open kitchens',
        type: 'show_product',
        product: {
          name: 'Side Suction',
          description: 'Close smoking distance, ideal for open kitchens',
          media: [
            { type: 'image', url: '/油烟机9009X.jpg' },
            { type: 'image', url: '/油烟机9039.jpg' },
            { type: 'image', url: '/9039_003.png' },
            { type: 'image', url: '/9039_001.jpg' },
            { type: 'image', url: '/9009_003.png' },
            { type: 'image', url: '/9009_002.png' },
            { type: 'image', url: '/9009_001.png' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=side%20suction%20range%20hood'
        }
      },
      {
        id: 'A7',
        text: 'Minimalist design, simple and practical',
        type: 'next_question',
        nextQuestionId: 'Q3'
      }
    ]
  },
  'Q3': {
    id: 'Q3',
    text: 'Besides minimalist, what else do you want?',
    answers: [
      {
        id: 'A8',
        text: 'Beautiful, quiet, strong suction, full features',
        type: 'show_product',
        product: {
          name: 'EMG9060',
          description: 'Full-featured range hood, quiet and efficient',
          media: [
            { type: 'image', url: '/油烟机9060.jpg' },
            { type: 'image', url: '/9060_1.jpg' },
            { type: 'image', url: '/9060_4.jpg' },
            { type: 'image', url: '/9060_001.png' },
            { type: 'image', url: '/9060_003.png' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=9060%20range%20hood'
        }
      },
      {
        id: 'A9',
        text: 'Strong suction, cost-effective',
        type: 'show_product',
        product: {
          name: 'EMG9063G / EMG9008',
          description: 'High cost-performance, powerful suction',
          media: [
            { type: 'image', url: '/油烟机9063G.jpg' },
            { type: 'image', url: '/油烟机9008.jpg' },
            { type: 'image', url: '/9063_001.jpg' },
            { type: 'image', url: '/9063_002.jpg' },
            { type: 'image', url: '/9063_003.jpg' },
            { type: 'image', url: '/9008_002.jpg' },
            { type: 'image', url: '/9008_003.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=9063G%20range%20hood'
        }
      },
      {
        id: 'A10',
        text: 'Basic needs, stable and durable',
        type: 'show_product',
        product: {
          name: 'EMS9028S',
          description: 'Basic model, stable and reliable',
          media: [
            { type: 'image', url: '/油烟机9028S.jpg' },
            { type: 'image', url: '/9028_001.jpg' },
            { type: 'image', url: '/9028_002.jpg' },
            { type: 'image', url: '/9028_003.jpg' },
            { type: 'image', url: '/9028_004.jpg' }
          ],
          posterImages: ['/海报图1.jpg'],
          shoppingUrl: 'https://search.jd.com/Search?keyword=9028S%20range%20hood'
        }
      }
    ]
  }
};

export const START_QUESTION_ID = 'Q1';
