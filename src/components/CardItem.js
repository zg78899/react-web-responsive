import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards_item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              // src={props.src}
              src="../images/img-9.jpg"
              alt="Travel adventure"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
export default CardItem;
