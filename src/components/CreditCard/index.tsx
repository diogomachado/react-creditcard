import * as React from 'react';
import './styles.css';

export interface PropsCreditCard {
  cardNumber: string;
  holderName: string;
}

export function CreditCard({ cardNumber, holderName }: PropsCreditCard) {
  return (
    <>
      <div data-testid="credit-card" className="credit-card">
        <div className="credit-card-inner">
          <div className="credit-card-front">
            <div className="credit-card-company"></div>
            <div className="credit-card-info">
              <div className="credit-card-chip"></div>
              <h1
                data-testid="credit-card-number"
                className="credit-card-number"
              >
                {cardNumber}
              </h1>
              <div className="credit-card-valid">
                <div className="credit-card-valid-text">Valid from</div>
                <div className="credit-card-valid-date">12/23</div>
              </div>
              <div
                data-testid="credit-card-holder"
                className="credit-card-holder"
              >
                {holderName}
              </div>
            </div>
          </div>
          <div className="credit-card-back">
            <div className="barcode"></div>
            <div className="credit-card-back-info">
              <div className="signature"></div>
              <div className="code">675</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
