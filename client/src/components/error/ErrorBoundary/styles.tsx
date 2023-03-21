import { fontSize } from '@/styles/constant/fontSize';
import styled from '@emotion/styled';

export const StyledErrorBoundary = styled.section`
  text-align: center;
  margin-top: 40vh;

  .apiErrorBoundary-content {
    font-size: ${fontSize.regular};
    font-weight: bold;
  }

  button {
    margin: 25px 15px 0 0;
    border-radius: 30px;
  }
`;
