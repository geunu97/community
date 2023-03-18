import { CommentType } from '@/types/apis/comment';
import CommentsList from './CommentList';
import { StyledCommentListContainer } from './styles';

interface CommentListContainerPropsType {
  comments?: CommentType[];
}

export default function CommentListContainer({ comments }: CommentListContainerPropsType) {
  return (
    <StyledCommentListContainer>
      <p className="comments-title">댓글</p>
      <CommentsList comments={comments} />
    </StyledCommentListContainer>
  );
}
