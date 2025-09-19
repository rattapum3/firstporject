// src/connectAPI/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // ให้ตรงกับพอร์ตใน index.js
  // withCredentials: false, // อย่าเปิดถ้าไม่ใช้ cookie
});

export default api;
