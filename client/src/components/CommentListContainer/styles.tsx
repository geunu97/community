import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledCommentListContainer = styled.article`
  width: 80%;
  margin: 30px auto;

  .comments-title {
    color: ${palette.teal[300]};
    font-size: ${fontSize.small};
    font-weight: bold;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;
