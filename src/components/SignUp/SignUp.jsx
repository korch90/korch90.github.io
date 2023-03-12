import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BadLogin } from "../BadLogin/BadLogin";
import { useNavigate } from "react-router-dom";

import s from "./SignUp.module.css";

const SignUp = () => {
  const [badLogin, setBadLogin] = useState({ boolean: false, text: "" });
  const [color, setColor] = useState("brown");

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
      const user = await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      setColor("green");
      setBadLogin({ boolean: false, text: "Successful" });

      setTimeout(() => navigate("/SignIn"), 2200);
      formValue({
        email: "",
        password: "",
      });
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setBadLogin({ boolean: true, text: "invalid-email" });
      } else if (err.code === "auth/weak-password") {
        setBadLogin({ boolean: true, text: "weak-password" });
      } else if (err.code === "auth/email-already-in-use") {
        setBadLogin({ boolean: true, text: "email-already-in-use" });
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
          Sign Up
        </button>
      </form>
      {badLogin.boolean ? <BadLogin text={badLogin.text} /> : null}
      {badLogin.text === "Sucsesfull" && <p>Sucsesfull</p>}
    </div>
  );
};

export { SignUp };
