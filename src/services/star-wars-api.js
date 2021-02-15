import axios from "axios";
axios.defaults.baseURL = "https://swapi.dev/api/";

export const fetchPeople = () => axios.get("people/");
