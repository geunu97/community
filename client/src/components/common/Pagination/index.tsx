import { palette } from '@/styles/constant/palette';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { StyledPagination } from './styles';

interface PaginationPropsType {
  postsLength: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  postsLength,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationPropsType) {
  const [currentSlider, setCurrentSlider] = useState(1);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    setCurrentPage(1);
    setCurrentSlider(1);
    setPages(
      Array.from({ length: Math.ceil(postsLength / postsPerPage) }, (_, index) => index + 1)
    );
  }, [postsPerPage, postsLength]);

  if (postsLength === 0) {
    return <></>;
  }

  return (
    <StyledPagination>
      <Button
        disabled={currentSlider === 1}
        onClick={() => setCurrentSlider(currentSlider - 1)}
        scale="small"
        layout="text"
        color={palette.gray[700]}
      >
        &lt;
      </Button>
      {pages?.slice((currentSlider - 1) * 10, currentSlider * 10).map((page) => (
        <Button
          key={page}
          onClick={() => setCurrentPage(page)}
          scale="small"
          layout="text"
          color={currentPage === page ? palette.gray[700] : palette.gray[300]}
        >
          {page}
        </Button>
      ))}
      <Button
        disabled={currentSlider === Math.ceil(pages?.length / 10)}
        onClick={() => setCurrentSlider(currentSlider + 1)}
        scale="small"
        layout="text"
        color={palette.gray[700]}
      >
        &gt;
      </Button>
    </StyledPagination>
  );
}
