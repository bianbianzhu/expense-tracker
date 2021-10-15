import React from "react";
import TotalCard from "./totalCard/TotalCard";
import "./TotalSection.scss";

const TotalSection = (props) => {
  const total = { ...props.total };
  const keys = Object.keys(total);

  return (
    <section className="total-section">
      {keys.map((el, index) => {
        return <TotalCard cardTitle={el} value={total[el]} key={index} />;
      })}
    </section>
  );
};

export default TotalSection;
