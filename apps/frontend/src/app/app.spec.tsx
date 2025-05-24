import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';

// Tests

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a "Tasker" logo text', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('header-logo-title')).toHaveTextContent('Tasker');
  });
});
