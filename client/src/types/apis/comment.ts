export interface CreateCommentType {
  postId: number;
  parent?: number;
  content: string;
  writer: string;
  password?: string;
}

export interface CommentType extends CreateCommentType {
  id: number;
  created_at: string;
  updated_at?: string;
}
