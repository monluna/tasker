import { StyleHeader__ul, StyleHeader__img } from './style';
import HomeIcon from '../../assets/icons/home.svg';
import TaskIcon from '../../assets/icons/task.svg';

export default function Header__Navigation() {
  return (
    <nav>
      <StyleHeader__ul>
        <li>
          <a href="">
            <StyleHeader__img src={HomeIcon} alt="Home" />
          </a>
        </li>
        <li>
          <a href="">
            <StyleHeader__img  src={TaskIcon} alt="Task" />
          </a>
        </li>
        <li>
          <a href="">
            <StyleHeader__img src={TaskIcon} alt="Task" />
          </a>
        </li>
        <li>
          <a href="">
            <StyleHeader__img  src={TaskIcon} alt="Task" />
          </a>
        </li>
        <li>
          <a href="">
            <StyleHeader__img  src={TaskIcon} alt="Task" />
          </a>
        </li>
        <li>
          <a href="">
            <StyleHeader__img  src={TaskIcon} alt="Task" />
          </a>
        </li>
      </StyleHeader__ul>
    </nav>
  );
}
