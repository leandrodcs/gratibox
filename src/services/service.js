import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "https://gratibox-back.herokuapp.com" : "http://localhost:4000";

function createConfig(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

function signUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}

function signIn(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}

function getSubscription(token) {
    return axios.get(`${BASE_URL}/subscription`, createConfig(token))
}

function postSubscription(token, body) {
    return axios.post(`${BASE_URL}/subscription`, body, createConfig(token))
}


export {
    signUp,
    signIn,
    getSubscription,
    postSubscription,
}