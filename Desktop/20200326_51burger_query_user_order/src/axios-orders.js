import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-631c0-default-rtdb.firebaseio.com/"
});

export default instance;
