import s from "./Main.module.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

const Main = () => {
  const posts = useLoaderData();
  const navigate = useNavigate();
  const [input_value, setInput_value] = useState("");
  const sorted = (arr) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };

  const handle_open_card = (el) => {
    navigate(`/Main/${el}`);
  };
  const value_tape = (e) => {
    setInput_value(e.target.value);

    localStorage.setItem("cash_value", JSON.stringify(e.target.value));
  };

  useEffect(() => {
    if (input_value == "") {
      setInput_value(JSON.parse(localStorage.getItem("cash_value")));
    }
  }, []);

  const filtered_posts = () => {
    if (input_value) {
      return posts.results.filter((el) =>
        el.name.toLowerCase().includes(input_value.toLowerCase())
      );
    } else {
      return posts.results;
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.logo}></div>
      <div className={s.input_form}>
        <div className={s.scope_img}></div>
        <input
          type="text"
          value={input_value}
          placeholder="Filter by name..."
          onChange={(e) => value_tape(e)}
        />
      </div>

      <div className={s.cards_wrapper}>
        {sorted(filtered_posts()).map((el) => (
          <Card el={el} key={el.id} handle_open_card={handle_open_card} />
        ))}
      </div>
    </div>
  );
};

const loader = async ({ request, params }) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
};
export { Main, loader };
