import { PostType } from '@/types/apis/post';
import { StyledPostDetail } from './styles';

interface PostDetailPropsType {
  prePost: PostType;
}

export default function PostDetail({ prePost }: PostDetailPropsType) {
  return (
    <StyledPostDetail>
      <p className="post-title">{prePost.title}</p>
      <p className="post-info">
        {prePost.writer} | {prePost.created_at.slice(0, 10)} {prePost.created_at.slice(11, 16)}
      </p>
      <p className="post-content">{prePost.content}</p>
    </StyledPostDetail>
  );
}
