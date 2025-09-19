// src/pages/HomePage.jsx
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ยินดีต้อนรับสู่หน้า HomePage</h1>
      <p>หน้านี้จะไม่แสดงเมนูนำทาง (nav)</p>

      <p>
        <Link to="/fruitListPage">ไปที่หน้าข้อมูลผลไม้</Link>
      </p>
      <p>
        <Link to="/insertFruitPage">เพิ่มผลไม้ใหม่</Link>
      </p>
      <p>
        <Link to="/manageFruitPage">จัดการผลไม้</Link>
      </p>

      <button onClick={() => navigate("/fruitListPage")}>
        ไปหน้า FruitList (ด้วยปุ่ม)
      </button>
    </div>
  );
}

export default HomePage;
