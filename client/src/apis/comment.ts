import { CommentType } from '@/types/apis/comment';
import { apiFetcher } from './common/apiFetcher';

export default function getComments(postId: number) {
  return apiFetcher<CommentType[], null>('get', `/comments?postId=${postId}`);
}
