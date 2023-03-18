import { useComments } from '@/hooks/useComments';
import { CommentType } from '@/types/apis/comment';
import CommentForm from '../CommentForm';
import CommentsList from './CommentList';
import { StyledCommentListContainer } from './styles';

interface CommentListContainerPropsType {
  preComments?: CommentType[];
}

export default function CommentListContainer({ preComments }: CommentListContainerPropsType) {
  const { comments, onCreateComment } = useComments(preComments);

  return (
    <StyledCommentListContainer>
      <p className="comments-title">댓글</p>
      <CommentsList comments={comments} onCreateComment={onCreateComment} />
      <CommentForm onCreateComment={onCreateComment} />
    </StyledCommentListContainer>
  );
}
