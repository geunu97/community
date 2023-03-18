import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export const StyledPostListContainer = styled.article`
  .main-title {
    font-size: ${fontSize.medium};
    color: ${palette.teal[300]};
    border-bottom: 1px solid ${palette.teal[200]};
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 50px;
  }
`;
