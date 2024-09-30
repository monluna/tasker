import { MouseEventHandler, ReactNode } from 'react';
import { StyleButton } from './style';

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function GradientButton({ onClick, children }: Props) {
  return <StyleButton onClick={onClick}>{ children}</StyleButton>;
}
