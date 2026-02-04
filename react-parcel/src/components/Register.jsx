import { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [food, setFood] = useState("");
  const [gender, setGender] = useState("");

  function submitForm(e) {
    e.preventDefault();

    const data = {
      userName: userName,
      email: email,
      password: password,
      phone: phone,
      age: age,
      address: address,
      city: city,
      pincode: pincode,
      food: food,
      gender: gender,
    };

    fetch("http://localhost:8081/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form onSubmit={submitForm} style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter City"
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Pincode"
          onChange={(e) => setPincode(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setFood(e.target.value)}>
          <option value="">Select food</option>
          <option value="Briyani">Briyani</option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
        </select>{" "}
        <br />
        <br />
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
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
