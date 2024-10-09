import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "Kingsley",
    lastName: "Deng",
  });

  const updateForm = (newFormData) => {
    setFormData({ ...formData, ...newFormData });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formData);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <label>FirstName</label>
        <input
          name="firstName"
          defaultValue={formData.firstName}
          onChange={(e) => updateForm({ firstName: e.target.value })}
        ></input>
      </div>

      <div>
        <label>LastName</label>
        <input
          name="lastName"
          defaultValue={formData.lastName}
          onChange={(e) => updateForm({ lastName: e.target.value })}
        ></input>
      </div>
      <input type="submit"></input>
    </form>
  );
}
