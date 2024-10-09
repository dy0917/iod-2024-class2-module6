import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [formData, setFormData] = useState({});
  const [submitResult, setSubmitResult] = useState("");

  const updateForm = (newFormData) => {
    setFormData({ ...formData, ...newFormData });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    console.log(formData);

    if (formData.password.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (formData.password === formData.email) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
    }
  };

  return (
    <form className="LoginForm componentBox" onSubmit={(e) => onSubmit(e)}>
      <div className="formRow">
        <label>
          Email Address:
          {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
          <input
            type="email"
            defaultValue={formData.email}
            name="userEmail"
            onChange={(e) => {
              updateForm({ email: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            defaultValue={formData.password}
            name="password"
            onChange={(e) => {
              updateForm({ password: e.target.value });
            }}
          />
        </label>

        <div className="formRow">
          <label>
            repeat Password:
            <input
              type="password"
              defaultValue={formData.repeatpassword}
              name="repeatpassword"
              onChange={(e) => {
                updateForm({ repeatpassword: e.target.value });
              }}
            />
          </label>
        </div>
        {submitResult ? <p>{submitResult}</p> : undefined}
        <input type="submit" />
      </div>
    </form>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
