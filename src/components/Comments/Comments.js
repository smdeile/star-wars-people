import React from "react";

import css from "./Comments.module.css";

function Comments({ comments }) {
  const { commentsFrom = comments } = comments;

  return (
    <section>
      <h3 className={css.text}>Comments:</h3>
      <ul>
        {commentsFrom?.comments.map((comment, indx) => (
          <li key={indx} className={css.commentItem}>
            <p className={css.comment}>{comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;
