import axios from "axios";
// import { config } from "process";
import { AuthResponse } from "../models/response/AuthResponse";

export const REACT_API_URL = `http://localhost:5000/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: REACT_API_URL 
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${REACT_API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Не автаризован');
        }
    }
    throw error
})

export default $api;