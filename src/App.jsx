import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";   // 👈 ชื่อ HomePage
import FruitList from "./pages/FruitsList"; // 👈 เดิม MemberList
import InsertFruit from "./pages/InsertFruits"; // 👈 เดิม InsertMember
import ManageFruit from "./pages/ManageFruits"; // 👈 เดิม ManageMember

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruitListPage" element={<FruitList />} />
        <Route path="/insertFruitPage" element={<InsertFruit />} />
        <Route path="/manageFruitPage" element={<ManageFruit />} />
      </Routes>
    </div>
  );
}

export default App;
