import { PostType } from '@/types/apis/post';
import { StyledPostDetail } from './styles';

interface PostDetailPropsType {
  prePost: PostType;
}

export default function PostDetail({ prePost }: PostDetailPropsType) {
  return (
    <StyledPostDetail>
      <p className="postDetail-title">{prePost.title}</p>
      <p className="postDetail-info">
        {prePost.writer} | {prePost.created_at.slice(0, 10)} {prePost.created_at.slice(11, 16)}
      </p>
      <p className="postDetail-content">{prePost.content}</p>
    </StyledPostDetail>
  );
}
