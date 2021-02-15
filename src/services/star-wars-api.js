import axios from "axios";

const BASE_URL = "https://swapi.dev/api/people/";

export const fetchPeople = () => axios.get(BASE_URL);
