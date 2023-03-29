import Field from "../field/FIeld";
import "./Form.scss";

export default function Form() {
  return (
    <form className="form">
      <h2 className="form__title">Form Validation</h2>
      <Field type="password" placeholder="Password" isPassword={true} />
      <Field />
    </form>
  );
}
