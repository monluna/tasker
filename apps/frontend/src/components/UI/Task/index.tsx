import { MouseEventHandler } from 'react';
import {
  StyleTask,
  StyleInput,
  StyleInputTask,
  StyleButtonTask,
  StyleTitleTask,
  StyleIcon,
  StyleSectionIcon,
} from './style';

import DeleteIcon from '../../../assets/icons/delete.svg';
import EditIcon from '../../../assets/icons/edit.svg';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  height: string;
  background: string;
  text: string;
}
export default function Task({ onClick, height, background, text }: Props) {
  return (
    <StyleTask background={background} height={height}>
      <StyleInput>
        <StyleInputTask type="checkbox" id="myCheckbox" />
        <label htmlFor="myCheckbox"></label>
      </StyleInput>
      <StyleButtonTask>
        <StyleTitleTask>{text}</StyleTitleTask>
      </StyleButtonTask>
      <StyleSectionIcon>
        <button>
          <StyleIcon src={EditIcon} alt="Plus" />
        </button>
        <button>
          <StyleIcon src={DeleteIcon} alt="Plus" />
        </button>
      </StyleSectionIcon>
    </StyleTask>
  );
}
