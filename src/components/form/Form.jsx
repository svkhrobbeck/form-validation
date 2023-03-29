import { useState } from "react";
import "./Form.scss";

export default function Form() {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    const elInputValue = evt.target.value;

    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (elInputValue.length === 0) {
      setError("Please enter your password");
      setIsValid(false);
    } else if (elInputValue.length < 8) {
      setError("The password must be at least 8 characters long");
      setIsValid(false);
    } else {
      if (!!elInputValue.match(regex)) {
        setError("Password is valid");
        setIsValid(true);
      } else {
        setError(
          "Please password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character"
        );
        setIsValid(false);
      }
    }
  }

  return (
    <form className="form">
      <h2 className="form__title">Password Validation</h2>
      <label className="form__label" htmlFor="InputPassword">
        Password
      </label>
      <input
        className={`form__field ${isValid && "form__field--valid"}`}
        type="text"
        placeholder="Password"
        id="InputPassword"
        autoComplete="off"
        onChange={handleChange}
      />
      <p className={`form__error ${isValid && "form__error--valid"}`}>
        {error}
      </p>
    </form>
  );
}
