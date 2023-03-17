import { PostWithCommentsType } from '@/types/apis/post';
import PostList from './PostList';
import { StyledPostListContainer } from './styles';

interface PostListContainerPropsType {
  posts?: PostWithCommentsType[];
}

export default function PostListContainer({ posts }: PostListContainerPropsType) {
  return (
    <StyledPostListContainer>
      <p className="main-title">게시판</p>
      <PostList posts={posts} />
    </StyledPostListContainer>
  );
}
