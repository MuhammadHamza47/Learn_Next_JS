"use client";

import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [state, setState] = useState({
    userName: "",
    email: "",
    phone: 0,
  });

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log("onChangeHandler", e.target.value);
    
  }
  // const emailHandler = (e) => {
  //   setEmail(e.target.value)
  //   console.log("emailHandler", e.target.value)
  // }
  // const phoneHandler = (e) => {
  //   setPhone(e.target.value)
  //   console.log("phoneHandler", e.target.value)
  // }
  return (
    <div>
      <input
      name="userName"
        type="text"
        onChange={onChangeHandler}
        placeholder="enter your name"
      />
      <br />
      <br />
      <input
        name="email"
        type="email"
        onChange={onChangeHandler}
        placeholder="enter your email"
      />
      <br />
      <br />
      <input
        name="phone"
        type="number"
        onChange={onChangeHandler}
        placeholder="enter your phone"
      />

      {/* <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder="enter your name" /><br/><br/> */}
      {/* <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" /><br/><br/> */}
      {/* <input type="number" onChange={(e)=>setPhone(e.target.value)} placeholder="enter your phone" /> */}
      <hr />
      <h4>User Name: {state.userName}</h4>
      <h4>Email: {state.email}</h4>
      <h4>Phone: {state.phone}</h4>
      <hr />
    </div>
  );
}
