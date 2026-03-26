import { useState } from "react";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
// Import the FakeNotification component we discussed earlier
import FakeNotification from "../components/FakeNotification"; 

const Result = () => {
  const [claimed, setClaimed] = useState(false);
  const [wonAmount, setWonAmount] = useState(0);

  const handleFinish = (amount) => {
    setWonAmount(amount);
    setClaimed(true);
    
    // Play a subtle vibration for mobile users
    if ("vibrate" in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    toast.success(`🎉 ৳${amount} Salami Added!`, {
      style: {
        borderRadius: '10px',
        background: '#064e3b',
        color: '#fff',
        fontFamily: 'Poppins',
      },
    });
  };

  return (
    <div style={styles.container}>
      {!claimed ? (
        <div style={styles.spinnerWrapper}>
          <h2 style={styles.title}>Spin & Win Your Salami 🎡</h2>
          <p style={styles.subtitle}>Good luck! May your Eid be prosperous.</p>
          <Spinner onFinish={handleFinish} />
        </div>
      ) : (
        <div style={styles.successCard}>
          {/* This is the dummy message logic */}
          <FakeNotification amount={wonAmount} />
          
          <div style={styles.iconBox}>💰</div>
          <h1 style={styles.successTitle}>Transfer Successful</h1>
          <div style={styles.amountDisplay}>
            <span style={styles.currency}>৳</span>{wonAmount}
          </div>
          <p style={styles.footerText}>
            The amount has been sent to your bKash number. 
            Check your messages for the Transaction ID.
          </p>
          
          <button 
            style={styles.homeBtn} 
            onClick={() => window.location.href = '/'}
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at center, #064e3b 0%, #022c22 100%)",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  },
  spinnerWrapper: {
    textAlign: "center",
    animation: "fadeIn 1s ease-out",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "10px",
    
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "14px",
    marginBottom: "30px",
  },
  successCard: {
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    padding: "50px 40px",
    borderRadius: "30px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
    maxWidth: "400px",
    animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  iconBox: {
    fontSize: "50px",
    marginBottom: "20px",
  },
  successTitle: {
    fontSize: "22px",
    color: "#fff",
    fontWeight: "600",
    marginBottom: "30px",
  },
  amountDisplay: {
    fontSize: "60px",
    fontWeight: "800",
    color: "#fbbf24",
    // margin: "10px 0",
    letterSpacing: "-2px",
    marginBottom: "20px",
  },
  currency: {
    fontSize: "24px",
    verticalAlign: "middle",
    marginRight: "5px",
  },
  footerText: {
    color: "#9ca3af",
    fontSize: "13px",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  homeBtn: {
    padding: "12px 30px",
    borderRadius: "50px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  }
};

export default Result;