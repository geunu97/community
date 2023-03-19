import { useEffect, useState } from 'react';

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
  }, [postsPerPage]);

  if (postsPerPage === 0) {
    return <></>;
  }

  return (
    <div>
      <button disabled={currentSlider === 1} onClick={() => setCurrentSlider(currentSlider - 1)}>
        &lt;
      </button>
      {pages?.slice((currentSlider - 1) * 10, currentSlider * 10).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{ color: currentPage === page ? 'black' : '#999999' }}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentSlider === Math.ceil(pages?.length / 10)}
        onClick={() => setCurrentSlider(currentSlider + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
