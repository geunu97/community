import { PostWithCommentsLengthType } from '@/types/apis/post';
import Link from 'next/link';
import { StyledPostItem } from './styles';

interface PostItemPropsType {
  item?: PostWithCommentsLengthType;
}

export default function PostItem({ item }: PostItemPropsType) {
  return (
    <Link href={`/posts/${item?.id}`} passHref>
      <StyledPostItem>
        <p className="postItem-title">{item?.title}</p>
        <p className="postItem-content">{item?.content}</p>
        <span className="postItem-date">{item?.created_at.slice(0, 10)} | </span>
        <span className="postItem-comment">댓글 수: {item?.commentsLength}</span>
      </StyledPostItem>
    </Link>
  );
}
