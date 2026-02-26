// 答案类型
export type AnswerType = 'next_question' | 'show_product';

// 媒体类型
export type MediaType = 'image' | 'video';

// 媒体项接口
export interface MediaItem {
  type: MediaType;
  url: string;
}

// 答案接口
export interface Answer {
  id: string;
  text: string;
  type: AnswerType;
  // 如果是跳转到下一个问题，则存储下一个问题的ID
  nextQuestionId?: string;
  // 如果是展示产品，则存储产品信息
  product?: ProductInfo;
}

// 产品信息接口
export interface ProductInfo {
  name: string;
  description: string;
  media: MediaItem[]; // 支持图片和视频混排
}

// 问题接口
export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}
