import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Main, loader } from "./components/Main/Main.jsx";
import { Open_card, postLoader } from "./components/Open_card/Open_card.jsx";
import { Login } from "./components/Auth/Login.jsx";
import { SignIn } from "./components/SignIn/SignIn.jsx";
import { SignUp } from "./components/SignUp/SignUp.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Main" element={<Main />} loader={loader} />
      <Route path="/Main/:id" element={<Open_card />} loader={postLoader} />
    </>
  )
);

function App() {
  // let log = localStorage.getItem("userEmail");

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <div className="App">ssss</div>
    </>
  );
}

export default App;
