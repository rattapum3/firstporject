// src/pages/ManageFruit.jsx
import React, { useEffect, useState } from "react";
import { getFruits, deleteFruit, updateFruit } from "../connectAPI/callFruits";

function ManageFruit() {
  const [fruits, setFruits] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");

  const fetchFruits = async () => {
    try {
      const data = await getFruits();
      setFruits(data);
    } catch (err) {
      console.error("โหลดข้อมูลล้มเหลว:", err);
      alert("โหลดข้อมูลล้มเหลว: " + err.message);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFruit(id);
      await fetchFruits();
    } catch (e) {
      console.error(e);
      alert("ลบไม่สำเร็จ: " + e.message);
    }
  };

  const handleEdit = (fruit) => {
    setEditId(fruit.id);
    setEditName(fruit.name ?? "");
    setEditPrice(fruit.price ?? "");
    setEditStock(fruit.stock ?? "");
    setEditImageUrl(fruit.image_url ?? "");
  };

  const handleUpdate = async (id) => {
    try {
      await updateFruit(id, {
        name: editName,
        price: Number(editPrice),
        stock: Number(editStock),
        image_url: editImageUrl,
      });
      setEditId(null);
      await fetchFruits();
    } catch (e) {
      console.error(e);
      alert("อัปเดตไม่สำเร็จ: " + e.message);
    }
  };

  return (
    <div>
      <h2>รายการผลไม้</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ชื่อ</th>
            <th>ราคา</th>
            <th>คงเหลือ</th>
            <th>รูปภาพ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              {editId === fruit.id ? (
                <>
                  <td>{fruit.id}</td>
                  <td>
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editStock}
                      onChange={(e) => setEditStock(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={editImageUrl}
                      onChange={(e) => setEditImageUrl(e.target.value)}
                      placeholder="https://..."
                    />
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(fruit.id)}>บันทึก</button>
                    <button onClick={() => setEditId(null)}>ยกเลิก</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{fruit.id}</td>
                  <td>{fruit.name}</td>
                  <td>{fruit.price}</td>
                  <td>{fruit.stock}</td>
                  <td><img src={fruit.image_url} alt="" width="150"/></td>
                  <td>
                    <button onClick={() => handleEdit(fruit)}>แก้ไข</button>
                    <button onClick={() => handleDelete(fruit.id)}>ลบ</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageFruit;
