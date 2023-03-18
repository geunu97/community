import { PostWithCommentsLengthType } from '@/types/apis/post';
import Link from 'next/link';
import { StyledPostItem, StyledPostList } from './styles';

interface PostItemPropsType {
  post: PostWithCommentsLengthType;
}

interface PostListPropsType {
  posts?: PostWithCommentsLengthType[];
}

function PostItem({ post }: PostItemPropsType) {
  return (
    <Link href={`/posts/${post.id}`} passHref>
      <StyledPostItem>
        <p className="post-title">{post.title}</p>
        <p className="post-content">{post.content}</p>
        <span className="post-date">{post.created_at.slice(0, 10)} | </span>
        <span className="post-comment">댓글 수: {post.commentsLength}</span>
      </StyledPostItem>
    </Link>
  );
}

export default function PostList({ posts }: PostListPropsType) {
  return (
    <StyledPostList>
      {posts && [...posts].reverse().map((post) => <PostItem post={post} key={post.id} />)}
    </StyledPostList>
  );
}
