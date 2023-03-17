import { PostType } from '@/types/apis/post';
import { StyledPostViewer } from './styles';

interface PostViewerPropsType {
  post: PostType;
}

export default function PostViewer({ post }: PostViewerPropsType) {
  return (
    <StyledPostViewer>
      <p className="post-title">{post.title}</p>
      <p className="post-info">
        {post.writer} | {post.created_at.slice(0, 10)} {post.created_at.slice(11, 16)}
      </p>
      <p className="post-content">{post.content}</p>
    </StyledPostViewer>
  );
}
