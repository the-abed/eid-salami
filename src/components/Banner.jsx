import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Banner = () => {
  const navigate = useNavigate();
  // We use state to track width for specific font-size adjustments if needed
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{
        ...styles.glassCard,
        padding: isMobile ? "40px 20px" : "60px", // Less padding on mobile
        width: isMobile ? "90%" : "auto",        // Take up more screen on mobile
      }}>
        <h1 style={{
          ...styles.heading,
          fontSize: isMobile ? "2.5rem" : "3.5rem", // Shrink text on mobile
        }}>
          Eid Mubarak
        </h1>
        <p style={styles.subtext}>
          May your day be filled with joy and blessings.
        </p>
        
        <button 
          onClick={() => navigate("/payment")} 
          style={styles.btn}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Get Salami 
          <span style={{ marginLeft: '10px' }}>💰</span>
        </button>
        <footer style={styles.developerCredit}>
  Developed by <span style={{ color: "#fbbf24", fontWeight: "600" }}>Mohammad Abed</span>
</footer>
      </div>
      
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at center, #064e3b 0%, #022c22 100%)",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden", // Prevents accidental scrollbars
  },
  glassCard: {
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    maxWidth: "500px", // Ensures it doesn't get too wide on tablets
  },
  heading: {
    margin: "0 0 15px 0",
    color: "#f3f4f6",
    fontWeight: "800",
    letterSpacing: "-1px",
    lineHeight: "1.2",
  },
  subtext: {
    color: "#9ca3af",
    fontSize: "1rem",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  btn: {
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    backgroundColor: "#fbbf24",
    color: "#064e3b",
    border: "none",
    borderRadius: "50px", // Rounded pills look better on mobile
    transition: "all 0.3s ease",
    boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.3)",
    display: "inline-flex",
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  developerCredit: {
  position: "",
  bottom: "20px",
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.4)",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontFamily: "'Poppins', sans-serif",
  textAlign: "center",
  marginTop: "30px",
  width: "100%",
  maxWidth: "500px",
  
}
};

export default Banner;