import { CreditCard } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';

describe('CreditCard test', () => {
  it('should render the CreditCard component', () => {
    render(
      <CreditCard
        cardNumber="1265  6545  6545  5646"
        holderName="Holder Name"
      />
    );

    expect(screen.getByTestId('credit-card')).toBeInTheDocument();
  });
});
