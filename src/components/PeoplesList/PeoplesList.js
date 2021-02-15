import React from "react";
import PeopleItem from "../PeopleItem/PeopleItem";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import css from "./PeoplesList.module.css";

const PeopleList = ({ people, onSubmit, comments }) => {
  function findComment(name) {
    return comments.find((el) => el.name === name);
  }

  return (
    <ul className={css.wrapper}>
      {people.map(({ name, birth_year }) => (
        <li key={name} className={css.listItem}>
          <div className={css.card}>
            <PeopleItem name={name} birth={birth_year} />
            <CommentForm name={name} onSubmit={onSubmit} />
            {findComment(name) && <Comments comments={findComment(name)} />}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default PeopleList;
