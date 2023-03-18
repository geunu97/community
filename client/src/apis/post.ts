import { PostType } from '@/types/apis/post';
import { apiFetcher } from './common/apiFetcher';

export function getPosts() {
  return apiFetcher.get<PostType[]>('/posts');
}

export function getPost(postId: number) {
  return apiFetcher.get<PostType>(`/posts/${postId}`);
}
