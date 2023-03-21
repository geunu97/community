import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledPostItem = styled.div`
  border-bottom: 1px solid ${palette.gray[200]};
  padding-top: 20px;
  height: 140px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .postItem-title {
    font-size: ${fontSize.regular};
    font-weight: bold;
    max-width: 60%;
    margin-bottom: 15px;
  }

  .postItem-content {
    font-size: ${fontSize.small};
    margin-bottom: 15px;
  }

  .postItem-date,
  .postItem-comment {
    color: ${palette.teal[300]};
    font-size: ${fontSize.small};
  }

  @media screen and (max-width: 480px) {
    height: 120px;
  }

  @media screen and (min-width: 2000px) {
    height: 180px;

    .postItem-title,
    .postItem-content {
      margin-bottom: 25px;
    }
  }
`;
