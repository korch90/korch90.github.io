import { useNavigate, useLoaderData } from "react-router-dom";

import s from "./OpenCard.module.css";
const Open_card = () => {
  const navigate = useNavigate();
  const { post, id } = useLoaderData();
  console.log(post);

  const navig = () => {
    navigate(-1);
  };

  return (
    <div className={s.wrapper}>
      <a className={s.go_back} onClick={() => navig()}>
        <img src={require("../../images/arrow_back_24px.png")} alt="" />
        <h3> GO BACK</h3>
      </a>
      <img src={post.image} alt="#" />
      <h2>{post.name}</h2>
      <h4>Informations</h4>
      <div className={s.info}>
        <h5>Gender</h5> <p>{post.gender}</p> <hr />
        <h5>Status</h5> <p>{post.status}</p> <hr />
        <h5>Specie</h5>
        <p>{post.species}</p>
        <hr />
        <h5>Origin</h5>
        <p>{post.origin.name}</p>
        <hr />
        <h5>Type</h5>
        <p>{post.type}</p>
        <hr />
      </div>
    </div>
  );
};

const postLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const post = await res.json();

  return { post, id };
};

export { Open_card, postLoader };
