// src/connectAPI/callFruits.js
import axios from "./axios";

export const getFruits    = () => axios.get("/fruits").then(r => r.data);
export const insertFruit  = (data) => axios.post("/fruits", data).then(r => r.data);
export const updateFruit  = (id, data) => axios.put(`/fruits/${id}`, data).then(r => r.data);
export const deleteFruit  = (id) => axios.delete(`/fruits/${id}`).then(r => r.data);
