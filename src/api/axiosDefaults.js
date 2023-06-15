import axios from "axios";

axios.defaults.baseURL = "https://moments-drfapi-95671cbfddab.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
