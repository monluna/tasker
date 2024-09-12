import { MouseEventHandler } from 'react';
import { StyleButton } from './style';

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function HeaderButton({ onClick }: Props) {
  return <StyleButton onClick={onClick}>Вход</StyleButton>;
}
