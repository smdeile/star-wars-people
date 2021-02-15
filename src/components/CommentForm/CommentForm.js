import React, { useState } from "react";
import css from "./CommentForm.module.css";

function CommentForm({ name, onSubmit }) {
  const [comment, setComment] = useState(null);
  const value = comment ? comment.comment : "";

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setComment({
      name: name,
      comment: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <textarea
        placeholder="Write your comment here"
        rows="2"
        cols="20"
        value={value}
        name={name}
        id={name}
        onChange={handleChange}
        className={css.textarea}
      ></textarea>

      <button className={css.button} type="submit">
        comment
      </button>
    </form>
  );
}

export default CommentForm;
