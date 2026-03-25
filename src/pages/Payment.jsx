import { useState } from "react";
import { useNavigate } from "react-router";

const Payment = () => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Regex for basic digit validation
    if (!/^\d{11}$/.test(number)) {
      alert("Please enter a valid 11-digit bKash number");
      return;
    }
    navigate("/result");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconContainer}>📱</div>
        <h2 style={styles.title}>Secure Payment</h2>
        <p style={styles.subtitle}>Enter your bKash number to receive your Salami</p>

        <div style={styles.inputGroup}>
          <input
            type="tel"
            maxLength="11"
            placeholder="01XXXXXXXXX"
            value={number}
            onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))} // Only allows numbers
            style={styles.input}
          />
        </div>

        <button 
          onClick={handleSubmit} 
          style={styles.btn}
          onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.filter = "brightness(1.0)")}
        >
          Confirm Transaction
        </button>

        <p style={styles.footerText}>🔒 Secured by 256-bit encryption</p>
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
    background: "radial-gradient(circle at center, #064e3b 0%, #022c22 100%)",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    borderRadius: "28px",
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
  },
  iconContainer: {
    fontSize: "40px",
    marginBottom: "15px",
  },
  title: {
    color: "#f3f4f6",
    fontSize: "24px",
    fontWeight: "600",
    margin: "0 0 8px 0",
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "14px",
    marginBottom: "30px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(0, 0, 0, 0.2)",
    color: "#fff",
    fontSize: "18px",
    textAlign: "center",
    letterSpacing: "2px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
  },
  btn: {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#fbbf24", // bKash-inspired Gold
    color: "#064e3b",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "transform 0.2s ease, filter 0.2s ease",
    boxShadow: "0 4px 15px rgba(251, 191, 36, 0.2)",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#4b5563",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default Payment;