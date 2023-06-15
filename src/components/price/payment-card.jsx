import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { useSelector } from 'react-redux';


const PaymentCard = () => {
    const store = useSelector((state) => state)
    const  {creditCardInfo: card} = store;

  return (
    <div id='PaymentForm'>
      <Cards
        number={card.number}
        expiry={card.expiry}
        cvc={card.cvc}
        name={card.name}
        focused={card.focus}
      />
    </div>
  );
}

export default PaymentCard;