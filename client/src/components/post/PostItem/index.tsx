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
        <p className="post-title">{item?.title}</p>
        <p className="post-content">{item?.content}</p>
        <span className="post-date">{item?.created_at.slice(0, 10)} | </span>
        <span className="post-comment">댓글 수: {item?.commentsLength}</span>
      </StyledPostItem>
    </Link>
  );
}
