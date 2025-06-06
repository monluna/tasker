import { MutableRefObject, useEffect } from 'react';

export default function useOnClickOutside(
  handler: (event: MouseEvent | TouchEvent) => void,
  ref: MutableRefObject<HTMLElement>,
  buttonRef?: MutableRefObject<HTMLElement>
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      if (
        buttonRef &&
        (!buttonRef.current || buttonRef.current.contains(event.target as Node))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
