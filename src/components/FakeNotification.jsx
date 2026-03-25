import { useState, useEffect } from "react";

const FakeNotification = ({ amount }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the notification after 1.5 seconds for "realism"
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={styles.notification}>
      <div style={styles.header}>
        <span style={styles.appName}>MESSAGES</span>
        <span style={styles.time}>now</span>
      </div>
      <div style={styles.body}>
        <strong>bKash</strong>
        <p style={styles.text}>
          You have received Salami: ৳{amount}.00 from Eid-Salami-Bot. 
          Fee ৳0.00. Balance ৳{amount + 500}.00. Ref: Eid Mubarak!
        </p>
      </div>
    </div>
  );
};

const styles = {
  notification: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "18px",
    padding: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 1000,
    border: "1px solid #ddd",
    animation: "slideDown 0.5s ease-out",
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "10px",
    color: "#888",
    marginBottom: "5px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  body: {
    color: "#333",
    fontSize: "13px",
    lineHeight: "1.4",
  },
  text: {
    margin: "2px 0 0 0",
    color: "#555",
  }
};

// Add this animation to your global CSS
/*
@keyframes slideDown {
  from { transform: translate(-50%, -100px); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
}
*/

export default FakeNotification;