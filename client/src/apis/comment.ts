import { CommentType, CreateCommentType } from '@/types/apis/comment';
import { apiFetcher } from './common/apiFetcher';

export function getComments(postId: number) {
  return apiFetcher.get<CommentType[]>(`/comments?postId=${postId}`);
}

export function createComment(postId: number, data: CreateCommentType) {
  return apiFetcher.post<CommentType, CreateCommentType>(`/comments?postId=${postId}`, data);
}
