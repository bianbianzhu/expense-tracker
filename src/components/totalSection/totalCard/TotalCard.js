import React from "react";
import "./TotalCard.scss";
import CardDefault from "../../UI/card/cardDefault/CardDefault";
import { ImArrowUp, ImArrowDown } from "react-icons/im";

const TotalCard = (props) => {
  const cardTitle = props.cardTitle;
  const cardValueRaw = props.value;

  let cardValue;

  if (typeof cardValueRaw === "number") {
    cardValue = cardValueRaw.toLocaleString("en-AU");
  } else {
    console.log("card value is not a number");
  }

  return (
    <CardDefault className="total-card">
      <div className="total-card__content">
        <h3 className="total-card__title">{cardTitle}</h3>
        <p className="total-card__value">{cardValue}</p>
      </div>
      <div className="total-card__graph">
        {cardValueRaw >= 300000 && <ImArrowUp style={{ "--arrow-color": "green" }} />}
        {cardValueRaw <= 300000 && <ImArrowDown style={{ "--arrow-color": "red" }} />}
      </div>
    </CardDefault>
  );
};

export default TotalCard;
