import { StyleHeader } from './style';

import Header__Logo from './Logo';
import Header__Navigation from './Navigation';
import {HeaderSwitch} from '../UI';
import { StyleHeader__div } from './style';
import { HeaderButton } from '../UI';



export default function Header() {
  return (
    <StyleHeader>
      <Header__Logo />
      <Header__Navigation />
      <StyleHeader__div>
        <HeaderButton />
        <HeaderSwitch />
      </StyleHeader__div>

    </StyleHeader>
  );
}
