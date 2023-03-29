import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import TugasKerja from "./pages/TugasKerja";
import LaporanKerja from "./pages/LaporanKerja";
import AbsensiHarian from "./pages/AbsensiHarian";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/tugas-kerja" element={<TugasKerja />} />
        <Route path="/laporan-kerja" element={<LaporanKerja />} />
        <Route path="/absensi-harian" element={<AbsensiHarian />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
