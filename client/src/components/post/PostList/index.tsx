import ListRenderer from '@/components/common/ListRenderer';
import { fontSize } from '@/styles/constant/fontSize';
import { PostType } from '@/types/apis/post';
import PostItem from '../PostItem';

interface PostListPropsType {
  posts?: PostType[];
}

export default function PostList({ posts }: PostListPropsType) {
  return (
    <ListRenderer
      title="익명게시판"
      titleSize={fontSize.regular}
      items={posts && [...posts].reverse()}
    >
      <PostItem />
    </ListRenderer>
  );
}
