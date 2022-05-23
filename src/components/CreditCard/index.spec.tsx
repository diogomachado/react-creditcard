import { CreditCard } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';

describe('CreditCard test', () => {
  let credit = {
    cardNumber: '1234 5678 9012 3456',
    holderName: 'John Doe'
  };

  it('should render the CreditCard component', () => {
    render(
      <CreditCard
        cardNumber={credit.cardNumber}
        holderName={credit.holderName}
      />
    );

    expect(screen.getByTestId('credit-card')).toBeInTheDocument();
    expect(screen.getByTestId('credit-card-number')).toHaveTextContent(
      credit.cardNumber
    );
    expect(screen.getByTestId('credit-card-holder')).toHaveTextContent(
      credit.holderName
    );
  });
});
