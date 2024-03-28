import axios from "axios"
export default axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? import.meta.env.VITE_API_URL :"http://localhost:8080/api",
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});
