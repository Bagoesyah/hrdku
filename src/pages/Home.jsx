import "../App.css";
import ButtonNotif from "../components/buttonNotif";
import ButtonAccount from "../components/buttonAccount";
import ButtonPlay from "../components/buttonPlay";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome">
          <div>
            <h3>Hi, Bagus Nurmansyah</h3>
            <p>Semoga hari mu menyenangkan</p>
          </div>
          <div className="useIcon">
            <ButtonNotif />
            <ButtonAccount />
          </div>
        </div>

        <div className="location">
          <p>Jl. sisingamaharaja</p>
        </div>
      </header>
      <div className="content">
        <div className="container-card">
          <div className="card">
            <h4>
              Informasi dan <br />
              Berita
            </h4>
            <p>Info tentang hari ini</p>
          </div>
          <div className="card">
            <h4>
              Rencana dan <br />
              Tiba-tiba
            </h4>
            <p>saya ada rencana izin</p>
          </div>
        </div>
        <div className="container-absen">
          <p>
            Selamat anda sudah tercatat absen untuk hari ini!{" "}
            <a href="#">Lihat Detail</a>
          </p>
          <button className="button-absen">Absen</button>
        </div>
        <div
          className="container-riwayat"
          onClick={() => navigate("/absensi-harian")}
        >
          <div>
            <h3>Lihat Absensi Harian</h3>
            <p>Sudah absen hari ini 30</p>
          </div>
          <ButtonPlay />
        </div>
        <div className="container-laporan">
          <div
            className="card-laporan"
            onClick={() => navigate("/tugas-kerja")}
          >
            Tugas Kerja
          </div>
          <div
            className="card-laporan"
            onClick={() => navigate("/laporan-kerja")}
          >
            Laporan Kerja
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
