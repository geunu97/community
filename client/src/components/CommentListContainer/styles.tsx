import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

export const StyledCommentListContainer = styled.article`
  width: 80%;
  margin: 30px auto;

  .comments-title {
    color: ${palette.teal[300]};
    font-size: 14px;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;
