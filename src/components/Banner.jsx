import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Eid Mubarak 🌙✨</h1>
      <button onClick={() => navigate("/payment")} style={styles.btn}>
        Get Salami 💰
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #00c9ff, #92fe9d)",
  },
  btn: {
    padding: "12px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Banner;