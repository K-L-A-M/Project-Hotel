import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
    baseURL: "https://hostel-uzul.onrender.com/api/",
  });