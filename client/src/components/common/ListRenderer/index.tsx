import { CommentType } from '@/types/apis/comment';
import { PostWithCommentsLengthType } from '@/types/apis/post';
import { cloneElement, useState } from 'react';
import Pagination from '../Pagination';
import { StyledListRenderer, StyledListRendererPropsType } from './styles';

interface ListRendererPropsType extends StyledListRendererPropsType {
  title: string;
  items?: PostWithCommentsLengthType[] | CommentType[];
  children: JSX.Element;
}

export default function ListRenderer({ title, titleSize, items, children }: ListRendererPropsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const slicedItems = items?.slice(
    (currentPage - 1) * postsPerPage,
    (currentPage - 1) * postsPerPage + postsPerPage
  );

  return (
    <StyledListRenderer titleSize={titleSize}>
      <div className="listRenderer-header">
        <p className="listRenderer-title">{title}</p>
        <p className="listRenderer-itemsLength">{items?.length}</p>
      </div>
      {slicedItems?.map((item) => (
        <div key={item.id}>{cloneElement(children, { item })}</div>
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        postsLength={items ? items.length : 0}
      />
    </StyledListRenderer>
  );
}
