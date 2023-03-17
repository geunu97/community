import { CommentType } from './comment';

export interface PostType {
  id: number;
  title: string;
  content: string;
  writer: string;
  password?: string;
  created_at: string;
  updated_at?: string;
}

export interface PostWithCommentsType extends PostType {
  comments: CommentType[];
}
