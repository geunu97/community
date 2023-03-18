import { PostWithCommentsLengthType } from '@/types/apis/post';
import PostList from './PostList';
import { StyledPostListContainer } from './styles';

interface PostListContainerPropsType {
  posts?: PostWithCommentsLengthType[];
}

export default function PostListContainer({ posts }: PostListContainerPropsType) {
  return (
    <StyledPostListContainer>
      <p className="main-title">Board</p>
      <PostList posts={posts} />
    </StyledPostListContainer>
  );
}
