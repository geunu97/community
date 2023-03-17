import { PostType } from '@/types/apis/post';
import { apiFetcher } from './common/apiFetcher';

export function getPosts() {
  return apiFetcher<PostType[], null>('get', '/posts');
}

export function getPost(postId: number) {
  return apiFetcher<PostType, null>('get', `/posts/${postId}`);
}
