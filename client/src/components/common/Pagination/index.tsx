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

const pagesPerSlider = 10;

export default function Pagination({
  postsLength,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationPropsType) {
  const [currentSlider, setCurrentSlider] = useState(1);
  const [pages, setPages] = useState<number[]>([]);

  const currentPostStartIndex = (currentSlider - 1) * pagesPerSlider;
  const currenPostEndIndex = currentSlider * pagesPerSlider;
  const currentSliderSlice = pages?.slice(currentPostStartIndex, currenPostEndIndex);

  useEffect(() => {
    const pageNumbers = Array.from(
      { length: Math.ceil(postsLength / postsPerPage) },
      (_, index) => index + 1
    );

    setCurrentPage(1);
    setCurrentSlider(1);
    setPages(pageNumbers);
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
      {currentSliderSlice?.map((page) => (
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
        disabled={currentSlider === Math.ceil(pages?.length / pagesPerSlider)}
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
