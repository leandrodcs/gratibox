import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "https://gratibox-back.herokuapp.com" : "http://localhost:4000";

function signUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}

function signIn(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}


export {
    signUp,
    signIn,
}