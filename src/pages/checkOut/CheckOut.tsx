import React, {useState} from "react";
import { Button } from "react-bootstrap";
import InputField from "../../components/form/InputField";
import "./checkOut.scss";

const CheckOut = () => {
  const [inputValue, setInputValue] = useState({
    cardholder: "",
    cardNumber: "",
    month: "",
    year: "",
    cv: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('paymentData', JSON.stringify(inputValue))

    setTimeout(() => {
      handleClearInputData()
    }, 1000)
  };


  const handleClearInputData = () => {
    setInputValue({
      ...inputValue,
      cardholder: "",
      cardNumber: "",
      month: "",
      year: "",
      cv: "",
    });
  };

  return (
    <>
      <h1 className="text-center">Credit Card Details</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <div>
            <h4>Card Holder</h4>
            <InputField
              placeholder="Card Holder"
              value={inputValue.cardholder}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue({ ...inputValue, cardholder: e.target.value })
              }
              label="Card Holder"
              className="form-control"
            />
            <InputField
              placeholder="Card Number"
              value={inputValue.cardNumber}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue({ ...inputValue, cardNumber: e.target.value })
              }
              label="Card Number"
              className="form-control"
            />
          </div>
          <div>
            <h4>Expiration Date</h4>
            <div className="expiration-date">
              <InputField
                placeholder="MM"
                value={inputValue.month}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue({ ...inputValue, month: e.target.value })
                }
                className="form-control"
              />
              <InputField
                placeholder="YY"
                value={inputValue.year}
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue({ ...inputValue, year: e.target.value })
                }
                className="form-control"
              />
            </div>
            <InputField
              placeholder="CV"
              value={inputValue.cv}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue({ ...inputValue, cv: e.target.value })
              }
              label="cv"
              className="form-control"
            />
          </div>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            style={{ width: "50%", marginTop: "20px" }}
          >
            Proceed
          </Button>
        </div>
      </form>
    </>
  );
};

export default CheckOut;
