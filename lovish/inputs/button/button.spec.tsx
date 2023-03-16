import React from 'react';
import { render } from '@testing-library/react';
import {
  ButtonInDefaultState,
  ButtonInLoadingState,
} from './button.composition';

describe('Button', () => {
  it('should render with its default text', () => {
    const { getByText } = render(<ButtonInDefaultState />);
    const rendered = getByText('Click Me!');
    expect(rendered).toBeTruthy();
  });

  it('should render in a loading state', () => {
    const { getByText } = render(<ButtonInLoadingState />);
    const rendered = getByText('Loading...');
    expect(rendered).toBeDisabled();
  });
});
