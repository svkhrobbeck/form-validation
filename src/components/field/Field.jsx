import "./Field.scss";
import { useState } from "react";

export default function Field({ props }) {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleChange(evt) {
    const elInputValue = evt.target.value;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (isPassword) {
      if (elInputValue.length === 0) {
        setError("Please enter your password");
        setIsValid(false);
      } else if (elInputValue.length < 8) {
        setError("The password must be at least 8 characters long");
        setIsValid(false);
      } else {
        if (!!elInputValue.match(passwordRegex)) {
          setError("Password is valid");
          setIsValid(true);
        } else {
          setError(
            "Please password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character"
          );
          setIsValid(false);
        }
      }
    } else {
      if (elInputValue.length === 0) {
        setError("Please enter your email");
        setIsValid(false);
      } else {
        if (!!elInputValue.match(emailRegex)) {
          setError("Email is valid");
          setIsValid(true);
        } else {
          setError("Please enter a valid email address, e.g. joe@mail.com");
          setIsValid(false);
        }
      }
    }
  }

  return (
    <div className="field">
      <label className="field__label">
        <span className="field__label-inner">{props.placeholder}</span>
        <input
          className={`field__input ${isValid && "field__input--valid"}`}
          type={props.type}
          placeholder={props.placeholder}
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      <p className={`field__error ${isValid && "field__error--valid"}`}>
        {error}
      </p>
    </div>
  );
}
