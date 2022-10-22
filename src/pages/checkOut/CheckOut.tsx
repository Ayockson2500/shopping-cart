import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InputField from "../../components/form/InputField";
import "./checkOut.scss"

const CheckOut = () => {
  const [inputValue, setInputValue] = useState<string>("");

  
  return (
    <>
      <h1 className="text-center">Credit Card Details</h1>
      <form className="form">
        <div className="input-wrapper">
        <div>
          <h4>Card Holder</h4>
        <InputField
          placeholder="Card Holder"
          value={inputValue}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          label="Card Holder"
          className="form-control"
        />
        <InputField
          placeholder="Card Number"
          value={inputValue}
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          label="Card Number"
          className="form-control"
        />
        </div>
        <div>
        <h4>Expiration Date</h4>
        <div className="expiration-date">
        <InputField
          placeholder="MM"
          value={inputValue}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          className="form-control"
        />
        <InputField
          placeholder="YY"
          value={inputValue}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          className="form-control"
        />
        </div>
        <InputField
          placeholder="CV"
          value={inputValue}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          label="cv"
          className="form-control"
        />
        </div>
        </div>
        <div className="text-center">
        <Button style={{width: '50%', marginTop:"20px"}}>Proceed</Button>
        </div>
      </form>
    </>
  );
};

export default CheckOut;
