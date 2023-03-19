import ListRenderer from '@/components/common/ListRenderer';
import { PostType } from '@/types/apis/post';
import PostItem from '../PostItem';

interface PostListPropsType {
  posts?: PostType[];
}

export default function PostList({ posts }: PostListPropsType) {
  return (
    <>
      <ListRenderer items={posts && [...posts].reverse()}>
        <PostItem />
      </ListRenderer>
    </>
  );
}
