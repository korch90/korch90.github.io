import s from "./Card.module.css";

function Card({ el, handle_open_card }) {
  return (
    <div className={s.card} onClick={() => handle_open_card(el.id)}>
      <img src={el.image} alt="" />
      <h6>{el.name}</h6>
      <p>{el.species} </p>
    </div>
  );
}
export default Card;
