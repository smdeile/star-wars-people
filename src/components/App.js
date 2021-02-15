import React, { useState, useEffect } from "react";
import * as peopleAPI from "../services/star-wars-api";
import PeoplesList from "./PeoplesList/PeoplesList";
import Wrapper from "./Wrapper/Wrapper";
import { nanoid } from "nanoid";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [people, setPeople] = useState([]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPeopleFromAPI() {
      try {
        const res = await peopleAPI.fetchPeople();
        const people = res.data.results;
        setPeople(people);
      } catch (err) {
        setError(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
      fetchPeopleFromAPI();
    }, 2000);
  }, []);

  const onSubmit = (data) => {
    if (data) {
      const { name, comment } = data;
      const newComments = [...comments];
      const existComment = newComments.find((el) => el.name === name);
      if (existComment) {
        existComment.comments.push(comment);
        setComments([...newComments]);
        return;
      }

      setComments([
        ...comments,
        { id: nanoid(), name: name, comments: [comment] },
      ]);
    }
  };

  return (
    <Wrapper>
      <>
        {isLoading && (
          <h2 style={{ color: "yellow" }}>Loading... Please wait</h2>
        )}
        {!isLoading && !people?.length > 0 && (
          <h2 style={{ color: "yellow", fontSize: "30px" }}>
            A long time ago in a galaxy far, far away…
          </h2>
        )}
        {people.length > 0 && (
          <PeoplesList
            people={people}
            onSubmit={onSubmit}
            comments={comments}
          />
        )}
        {error && <h2 style={{ color: "yellow" }}>Something went wrong</h2>}
      </>
    </Wrapper>
  );
};

export default App;
