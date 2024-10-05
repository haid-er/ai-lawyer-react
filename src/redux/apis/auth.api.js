import axios from "axios";
import axiosInstance from "./axiosInstance";
const apiBaseUrl = import.meta.env.VITE_EXPRESS_BASE_URL;
export const registerAPI = body => {
    console.log(apiBaseUrl);
    return axios.post(`${apiBaseUrl}/api/auth/register`, body).then(res => res.data);
}

export const loginAPI = body =>
    axios.post(`${apiBaseUrl}/api/auth/login`, body).then(res => res.data);

export const meAPI = _ =>
    axiosInstance.get(`${apiBaseUrl}/api/auth/me`).then(res => res.data);