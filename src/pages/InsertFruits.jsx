import '../App.css'
import React, { useState } from 'react';
import { insertFruit } from '../connectAPI/callFruits';  // 👈 import ใหม่
import { useNavigate } from 'react-router-dom'; 

function InsertFruit() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const fruitData = { 
      name: name,
      price: price,
      stock: stock,
      image_url: imageUrl
    };

    try {
      const data = await insertFruit(fruitData);
      setMessage("เพิ่มผลไม้สำเร็จ ✅");
      navigate("/manageFruitPage"); // 👈 เปลี่ยน path
    } catch (err) {
      setMessage("เกิดข้อผิดพลาด: " + err.message);
    }
  };

  const handleCancel = () => {
    setName('');
    setPrice('');
    setStock('');
    setImageUrl('');
  };

  return (
    <>
      <p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ชื่อผลไม้"
        />
      </p>
      <p>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="ราคา"
        />
      </p>
      <p>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="จำนวนคงเหลือ"
        />
      </p>
      <p>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="ลิงก์รูปภาพ"
        />
      </p>
      <p>
        <button onClick={handleSubmit}>บันทึก</button> 
        <button onClick={handleCancel}>ยกเลิก</button>
      </p>
      {message && <p>{message}</p>}
    </>
  );
}

export default InsertFruit;
