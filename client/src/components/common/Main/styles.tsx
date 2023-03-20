import styled from '@emotion/styled';

export interface StyledMainPropsType {
  width?: string;
  mobileWidth?: string;
  margin?: string;
}

export const StyledMain = styled.main<StyledMainPropsType>`
  width: ${(props) => props.width};
  margin: ${(props) => (props.margin ? props.margin : '70px auto')};

  @media screen and (max-width: 480px) {
    width: ${(props) => props.mobileWidth};
  }
`;
