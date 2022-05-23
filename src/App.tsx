import * as React from "react";
import "./styles.css";
import { CreditCard } from "./components/CreditCard";

export default function App() {
  return (
    <div className="App">
      <CreditCard
        cardNumber="1265  6545  6545  5646"
        holderName="Holder Name"
      />
    </div>
  );
}
