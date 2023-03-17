import { PostType } from '@/types/apis/post';
import { StyledPostItem, StyledPostList } from './styles';

interface PostItemPropsType {
  post: PostType;
}

interface PostListPropsType {
  posts?: PostType[];
}

function PostItem({ post }: PostItemPropsType) {
  return (
    <StyledPostItem>
      <p className="post-title">{post.title}</p>
      <p className="post-content">{post.content}</p>
      <span className="post-date">{post.created_at.slice(0, 10)} | </span>
      <span className="post-comment">댓글 수: 5</span>
    </StyledPostItem>
  );
}

export default function PostList({ posts }: PostListPropsType) {
  return (
    <StyledPostList>
      {posts && [...posts].reverse().map((post) => <PostItem post={post} key={post.id} />)}
    </StyledPostList>
  );
}
