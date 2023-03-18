export interface CommentType {
  id: number;
  postId: number;
  parent?: number;
  content: string;
  writer: string;
  password?: string;
  created_at: string;
  updated_at?: string;
}

export interface CreateCommentType {
  postId: number;
  parent?: number;
  content: string;
  writer: string;
  password: string;
}
