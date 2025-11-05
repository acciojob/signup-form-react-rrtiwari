import '../styles/App.css';
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!name || !email || !phoneNumber || !password) {
      setMessage("All fields are mandatory");
      return;
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      setMessage("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setMessage("email must contain @");
      return;
    }

    if (!(gender === "Male" || gender === "Female" || gender === "Other")) {
      setMessage("Please identify as male, female or others");
      return;
    }

    if (!/^[0-9]+$/.test(phoneNumber)) {
      setMessage("Phone Number must contain only numbers");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain atleast 6 letters");
      return;
    }

    const username = email.substring(0, email.indexOf("@"));
    setMessage(`Hello ${username}`);
  };

  return (
    <div id="main" style={{ padding: "20px" }}>
     <h2>Hello UMAKANT</h2>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>

        <input
          data-testid="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <select
          data-testid="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br/><br/>

        <input
          data-testid="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        /><br/><br/>

        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>

        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>

      {message && <span>{message}</span>}
    </div>
  );
}

export default App;


