import React from "react";
import avatar from "../../pictures/photoSercret.png";
import css from "./PeopleItem.module.css";

function PeopleItem({ name, birth }) {
  return (
    <div className={css.wrapper}>
      <div className={css.photoWrapper}>
        <img src={avatar} alt="top secret" className={css.photo} />
      </div>
      <div className={css.descriptionWrapper}>
        <h2 className={css.text}>Name: {name}</h2>
        <p className={css.text}>Year of birth: {birth}</p>
      </div>
    </div>
  );
}

export default PeopleItem;
