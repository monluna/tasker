import { StyleHeader } from './style';

import Header__Logo from './Logo';
import Header__Navigation from './Navigation';
import {HeaderSwitch} from '../UI';
import { StyleHeader__div } from './style';
import { GradientButton } from '../UI';

export default function Header() {
  return (
    <StyleHeader>
      <Header__Logo />
      <Header__Navigation />
      <StyleHeader__div>
        <GradientButton>Вход</GradientButton>
        <HeaderSwitch />
      </StyleHeader__div>
    </StyleHeader>
  );
}
