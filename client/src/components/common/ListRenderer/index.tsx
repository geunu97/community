import { CommentType } from '@/types/apis/comment';
import { PostWithCommentsLengthType } from '@/types/apis/post';
import { cloneElement, useState } from 'react';
import Pagination from '../Pagination';

interface ListRendererPropsType {
  items?: PostWithCommentsLengthType[] | CommentType[];
  children: JSX.Element;
}

export default function ListRenderer({ items, children }: ListRendererPropsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  if (!items || items.length === 0) {
    return <>게시글이 존재하지 않습니다.</>;
  }

  const slicedItems = items.slice(
    (currentPage - 1) * postsPerPage,
    (currentPage - 1) * postsPerPage + postsPerPage
  );

  return (
    <div>
      <div>제목</div>
      {slicedItems.map((item) => (
        <div key={item.id}>{cloneElement(children, { item })}</div>
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        postsLength={items ? items.length : 0}
      />
    </div>
  );
}
