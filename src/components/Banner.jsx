import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <h1 style={styles.heading}>Eid Mubarak</h1>
        <p style={styles.subtext}>May your day be filled with joy and blessings.</p>
        
        <button 
          onClick={() => navigate("/payment")} 
          style={styles.btn}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Get Salami 
          <span style={{ marginLeft: '10px' }}>💰</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Deep emerald and charcoal gradient for a premium feel
    background: "radial-gradient(circle at center, #064e3b 0%, #022c22 100%)",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  glassCard: {
    padding: "60px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  },
  heading: {
    fontSize: "3.5rem",
    margin: "0 0 20px 0",
    color: "#f3f4f6",
    fontWeight: "700",
    letterSpacing: "-1px",
  },
  subtext: {
    color: "#9ca3af",
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  btn: {
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    backgroundColor: "#fbbf24", // Warm Gold
    color: "#064e3b",
    border: "none",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.3)",
    display: "inline-flex",
    alignItems: "center",
  },
};

export default Banner;