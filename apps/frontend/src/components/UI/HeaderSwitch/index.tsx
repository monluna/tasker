import { StyleHeader_switch } from './style';

import { useTheme } from '../../../theme/useTheme';

export default function HeaderSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? 'dark' : 'light');
  };

  return (
    <StyleHeader_switch onClick={toggleTheme}>
      <svg id="sunmoon" viewBox="0 0 32 32">
        <defs>
          <linearGradient id="Gradient2">
            <stop offset="0%" stopColor="#fc5c7d" />
            <stop offset="100%" stopColor="#6a82fb" />
          </linearGradient>
          <mask id="maskc">
            <rect x="0" y="0" width="32" height="32" fill="white" />
            <circle id="mask-center" cx="40" cy="16" r="8" fill="black" />
          </mask>
          <mask id="maskr">
            <circle id="mask-rays" cx="16" cy="16" r="16" fill="white" />
          </mask>
        </defs>
        <circle id="center" mask="url(#maskc)" r="8" cx="16" cy="16" />
        <path
          id="rays"
          mask="url(#maskr)"
          d="M6,16l-6,0 M8.929,8.929l-4.243,-4.243 M8.929,23.071l-4.243,4.243 M16,26l-0,6 M27.314,27.314l-4.243,-4.243 M32,16l-6,0 M27.314,4.686l-4.243,4.243 M16,-0l-0,6"
        />
      </svg>
    </StyleHeader_switch>
  );
}
