import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://nzxtclone-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
