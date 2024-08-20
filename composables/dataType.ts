export interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

export interface GameType {
  company: string;
  coverImg: string;
  gameName: string;
  gameUrl: string;
  genres: string;
  id: string;
  subType: string;
}
export type GamePopular = GameType[];
export interface GameParams {
  pageNum: number;
  pageSize: number;
  gameCategory: string;
}
export interface GameList {
  countId: any;
  current: number;
  maxLimit: any;
  optimizeCountSql: boolean;
  orders: any;
  pages: number;
  records: GameType[];
  searchCount: any;
  size: number;
  total: number;
}
export interface GameDateils {
  company: string;
  coverImg: string;
  createBy: string;
  createDate: string;
  description: string;
  gameId: string;
  gameName: string;
  gameUrl: string;
  genres: string;
  httpsReady: number;
  id: string;
  kidsFriendly: number;
  languages: string;
  mobileReady: string;
  noBlood: number;
  releaseUpdate: string;
  subType: string;
  tags: string;
  updateBy: string;
  updateDate: string;
}

export interface GameCategoryItem {
  id: number;
  categoryName: string;
  createTime: string;
  updateTime: any;
}
export type GameCategoryList = GameCategoryItem[];
