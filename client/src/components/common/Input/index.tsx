import { StyledInput, StyledInputPropsType } from './styles';

export function Input({ ...props }: StyledInputPropsType) {
  return <StyledInput {...props} />;
}

export default Input;
