import axiosInstance from "./axiosInstance";
const apiBaseUrl = import.meta.env.VITE_EXPRESS_BASE_URL;

export const chatAPI = body =>
    axiosInstance.post(`${apiBaseUrl}/api/user/chat`, body).then(res => res.data);