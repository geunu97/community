import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import styled from '@emotion/styled';

export interface StyledListRendererPropsType {
  titleSize?: string;
}

export const StyledListRenderer = styled.article<StyledListRendererPropsType>`
  .listRenderer-header {
    display: flex;
    align-items: center;
    margin: 20px 0 15px;

    .listRenderer-title {
      color: ${palette.gray[700]};
      font-size: ${(props) => (props.titleSize ? props.titleSize : fontSize.small)};
      font-weight: bold;
      margin-right: 5px;
    }

    .listRenderer-itemsLength {
      color: ${palette.teal[300]};
      font-size: ${fontSize.small};
      font-weight: bold;
    }
  }
`;
