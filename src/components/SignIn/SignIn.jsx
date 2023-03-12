import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BadLogin } from "../BadLogin/BadLogin";
import { useNavigate } from "react-router-dom";

import s from "./SignIn.module.css";
const SignIn = () => {
  const [badLogin, setBadLogin] = useState({ boolean: false, text: "" });
  const [color, setColor] = useState("gold");

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e, key) => {
    setFormValue({
      ...formValue,
      [key]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );

      localStorage.setItem("userEmail", user.user.email);
      setColor("green");
      setBadLogin({ boolean: false, text: "Successful" });

      setTimeout(() => navigate("/Main"), 2200);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        console.log("wrong-password");
        setBadLogin({ boolean: true, text: "wrong-password" });
      } else if (err.code === "auth/user-not-found") {
        console.log("user-not-found");
        setBadLogin({ boolean: true, text: "user-not-found" });
      } else if (err.code === "auth/invalid-email") {
        console.log("invalid-email");
        setBadLogin({ boolean: true, text: "invalid-email" });
      } else {
        console.log(err.code);
      }
    } 
  };

  return (
    <div className={s.container}>
      <form className={s.form} action="">
        <div className={s.formSection}>
          <label style={{ color: color }} htmlFor="">
            Email
          </label>
          <input
            type="email"
            value={formValue.email}
            placeholder={"email"}
            autoComplete="true"
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className={s.formSection}>
          <label style={{ color: color }} htmlFor="">
            Password
          </label>
          <input
            type="password"
            value={formValue.password}
            placeholder={"password"}
            autoComplete="true"
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <button className={s.btn} onClick={handleSignUp}>
          Sign In
        </button>
      </form>
      {badLogin.boolean ? <BadLogin text={badLogin.text} /> : null}
      {badLogin.text === "Successful" && <p>Successful</p>}
    </div>
  );
};

export { SignIn };
