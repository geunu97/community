import { PostType } from '@/types/apis/post';
import { apiFetcher } from './common/apiFetcher';

export default function getPosts() {
  return apiFetcher<PostType[], null>('get', '/posts');
}
