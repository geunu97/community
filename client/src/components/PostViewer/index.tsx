import { CommentType } from '@/types/apis/comment';
import { PostType } from '@/types/apis/post';

import { StyledPostViewer } from './styles';

interface PostViewerPropsType {
  prePost: PostType;
}

export default function PostViewer({ prePost }: PostViewerPropsType) {
  return (
    <StyledPostViewer>
      <p className="post-title">{prePost.title}</p>
      <p className="post-info">
        {prePost.writer} | {prePost.created_at.slice(0, 10)} {prePost.created_at.slice(11, 16)}
      </p>
      <p className="post-content">{prePost.content}</p>
    </StyledPostViewer>
  );
}
