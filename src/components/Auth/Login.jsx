import s from "./Login.module.css"
import { NavLink ,useNavigate} from "react-router-dom"
import { useEffect } from "react"

  const Login=()=>{
  const navigate = useNavigate();
  let log=localStorage.getItem("userEmail")

useEffect(()=>{
  !log?navigate("/"):navigate("/Main")
},[])


    return(

        <div className={s.container} >
        <button className={s.buttonSignIn} > <NavLink to="/SignUp"> Sign Up </NavLink> </button>
        <button className={s.buttonSignUp}> <NavLink to="/SignIn"> Sign In </NavLink></button>
      </div>

    )
}

 export  {Login}