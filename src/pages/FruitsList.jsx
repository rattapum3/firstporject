import React, { useEffect, useState } from "react";
import { getFruits } from "../connectAPI/callFruits"; // 👈 เปลี่ยนเป็น fruits

function FruitList() {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const data = await getFruits();
      setFruits(data);
    } catch (err) {
      console.error("โหลดข้อมูลล้มเหลว:", err);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div>
      <h2> รายการผลไม้ </h2>
      {fruits.map((fruit) => (
        <div key={fruit.id} style={{ marginBottom: "10px" }}>
          <p>
            <b>ID:</b> {fruit.id} | <b>ชื่อ:</b> {fruit.name} |{" "}
            <b>ราคา:</b> {fruit.price} | <b>คงเหลือ:</b> {fruit.stock}
          </p>
          {fruit.image_url && (
            <img
              src={fruit.image_url}
              alt={fruit.name}
              width="80"
              style={{ objectFit: "cover", border: "1px solid #ccc" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default FruitList;
