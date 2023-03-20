import { useComments } from '@/hooks/useComments';
import { CommentType } from '@/types/apis/comment';
import CommentForm from '../CommentForm';
import ListRenderer from '../../common/ListRenderer';
import CommentItem from '../CommentItem';

interface CommentListPropsType {
  preComments?: CommentType[];
}

export default function CommentList({ preComments }: CommentListPropsType) {
  const { comments, onCreateComment } = useComments(preComments);
  const noParentsComments = comments?.filter((comment) => !comment.parent);

  return (
    <>
      <ListRenderer title="댓글" items={noParentsComments}>
        <CommentItem comments={comments} onCreateComment={onCreateComment} />
      </ListRenderer>
      <CommentForm onCreateComment={onCreateComment} />
    </>
  );
}
