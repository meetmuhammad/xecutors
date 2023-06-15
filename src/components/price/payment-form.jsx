import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreditCardInfo } from '../../redux/features/credit-card-info-slice';


const PaymentForm = () => {
  const store = useSelector((state) => state)
    const  {creditCardInfo: card} = store;

  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    let tempCard = card;
    let mskVal = value;
    if(name == 'number'){
      if(mskVal.length > 16 || isNaN(mskVal)){
        mskVal = mskVal.slice(0,-1);
      }
    }else if(name == 'expiry'){
     if(isNaN(mskVal) || mskVal.length > 4){
        mskVal = mskVal.slice(0,-1);
      }
    }else if(name == 'cvc'){
      if(mskVal.length > 3){
        mskVal = mskVal.substring(0,3);
      }
      if(isNaN(mskVal)){
        mskVal = mskVal.slice(0,-1);
      }
    }

    tempCard = {...tempCard, [name]: mskVal};
    dispatch(setCreditCardInfo(tempCard))
  }

  const handleInputFocus = (evt) => {
    let tempCard = card;
    tempCard = {...tempCard, focus: evt.target.name};
    dispatch(setCreditCardInfo(tempCard))
  }

  return (
      <form className="w-full flex flex-col mb-[30px]" action="">
        <input onChange={handleInputChange} onFocus={handleInputFocus} name="name" value={card?.name} className="w-full border-b py-[10px]" type="text" placeholder="Enter Name on card" />
        <div className="w-full relative">
        <input onChange={handleInputChange} onFocus={handleInputFocus} name="number" value={card?.number} className="w-full border-b py-[10px]" type="text" placeholder="Card number" />
        <img className="absolute right-0 top-[13px]" src="../../assets/img/news/VISA-logo.png" alt="" />
        </div>
        <div className="w-full flex gap-[20px]">
        <input onChange={handleInputChange} onFocus={handleInputFocus} name="cvc" value={card?.cvc} className="w-[100px] border-b py-[10px]" type="text" placeholder="CVV" />
        <input onChange={handleInputChange} onFocus={handleInputFocus} name="expiry" value={card?.expiry} className="w-[50%] border-b py-[10px]" type="text" placeholder="Expiration" />
        </div>
      </form>
  );
}

export default PaymentForm;