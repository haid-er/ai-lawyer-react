import axios from "axios";
import axiosInstance from "./axiosInstance";

export const registerAPI = body =>
    axios.post(`${BASE_URL}/auth/register`, body).then(res => res.data);


export const loginAPI = body =>
    axios.post(`${BASE_URL}/auth/login`, body).then(res => res.data);

export const meAPI = _ =>
    axiosInstance.get(`${BASE_URL}/auth/me`).then(res => res.data);