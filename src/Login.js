import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandel(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandel}>
        <input type="text" placeholder="Enter User ID" onChange={userHandler} />
        <br />
        {userErr ? <span>User ID not valid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter User Password"
          onChange={passwordHandler}
        />
        <br />
        {passErr ? <span>Password ID not valid</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
