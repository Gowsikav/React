import { useState } from "react";

const Register = () => {
  const initObject = {
    userName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    address: "",
    city: "",
    pincode: "",
    food: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initObject);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  }

  function submitForm(e) {
    e.preventDefault();

    fetch("http://localhost:8081/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setFormData(initObject);
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form onSubmit={submitForm} style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter Name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        <br />
        <br />
        <select onChange={handleChange} name="food" value={formData.food}>
          <option value="">Select food</option>
          <option value="Briyani">Briyani</option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
        </select>
        <br />
        <br />
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
