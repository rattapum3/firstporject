import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// สร้าง root element ที่ผูกกับ <div id="root"></div> ใน index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ครอบ <App /> ด้วย BrowserRouter เพื่อใช้ routing ได้ */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
