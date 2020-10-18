export enum CATOGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE
}
export interface Slider {
  url: string;
}

export interface Lesson {
  title: string;
  video: string;
  poster: string;
  price: number;
  category?: string;
}
export interface Lessons {
  hasMore: boolean; // 有没有更多数据
  loading: boolean; // 默认没有正在加载
  offset: number;
  limit: number;
  list: Lesson[]; // 当前显示在页面上课程
}

export interface HomeState {
  currentCategory: CATOGORY_TYPES;
  sliders: Slider[];
  lessons: Lessons;
}
