"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const verifyId = async () => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.topBar}></div>
            <div style={styles.shieldWrapper}>
              <Image
                src="/shield.png"
                width={60}
                height={60}
                alt="shield"
              />
            </div>
        <h1 style={styles.title}>Certificate Verification</h1>
        <p style={styles.subtitle}>
          Ensure the authenticity of your CodeAlpha certification by
          entering the unique ID found on your document.
        </p>

        <label style={styles.label}>CERTIFICATE ID</label>

        <div style={styles.inputWrapper}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="e.g. CA/SE1/23569"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={styles.input}
          />
        </div>

        <button
  onClick={verifyId}
  onMouseEnter={(e) => {
    if (id.trim() !== "") e.currentTarget.style.background = "#1d4ed8";
  }}
  onMouseLeave={(e) => {
    if (id.trim() !== "") e.currentTarget.style.background = "#2563eb";
  }}
  style={
    id.trim() === ""
      ? { ...styles.button, ...styles.buttonDisabled }
      : { ...styles.button, ...styles.buttonActive }
  }
  disabled={id.trim() === ""}
>
  Verify Authenticity
</button>



        {result && (
  <div style={{ marginTop: "25px" }}>

    {result.success ? (
      <div style={styles.resultCard}>
        <h3 style={styles.resultTitle}>✅ Certificate Verified</h3>

        <div style={styles.resultRow}>
          <span style={styles.resultLabel}>Name:</span>
          <span style={styles.resultValue}>{result.name}</span>
        </div>

        <div style={styles.resultRow}>
          <span style={styles.resultLabel}>Certificate ID:</span>
          <span style={styles.resultValue}>{result.certificateId}</span>
        </div>

        <div style={styles.resultRow}>
          <span style={styles.resultLabel}>Issued On:</span>
          <span style={styles.resultValue}>{result.issued}</span>
        </div>

      </div>
    ) : (
      <div style={styles.errorCard}>
        <h3 style={styles.errorTitle}>❌ Certificate Not Found</h3>
        <p style={styles.errorMsg}>{result.msg}</p>
      </div>
    )}
    
  </div>
)}


        <p style={styles.support}>
          Having trouble? Contact support at{" "}
          <a href="mailto:services@codealpha.tech" style={styles.email}>
            services@codealpha.tech
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "calc(100vh - 140px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    padding: "40px 0"
  },
  buttonDisabled: {
  background: "#0f172a", // slate-900
  color: "#cbd5e1",
  cursor: "not-allowed"
},

buttonActive: {
  background: "#2563eb", // brand-600 (blue)
  color: "#fff",
  cursor: "pointer",
  transition: "0.2s"
}
,
buttonActiveHover: {
  background: "#1d4ed8" // brand-700
},
  card: {
    width: "450px",
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0px 6px 22px rgba(0,0,0,0.1)",
    padding: "40px 32px",
    textAlign: "center",
    position: "relative",
  },
  shieldWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",  // pulls it up near gradient
    marginBottom: "50px"
  },

  topBar: {
    height: "5px",
    width: "100%",
    borderRadius: "14px 14px 0 0",
    background: "linear-gradient(90deg, #5DAEFF, #FF6363, #28C76F)"
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    marginTop: "12px",
    marginBottom: "6px",
    color: "#111",
    fontFamily: "Inter, sans-serif"
  },
  subtitle: {
    fontSize: "14px",
    color: "#54606e",
    lineHeight: "22px",
    marginBottom: "26px",
    fontFamily: "Inter, sans-serif"
  },
  label: {
    textAlign: "left",
    fontSize: "13px",
    fontWeight: 600,
    color: "#606a78",
    marginBottom: "6px",
    display: "block",
    fontFamily: "Inter, sans-serif"
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: "18px"
  },
  searchIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0.5,
    fontSize: "16px"
  },
  input: {
  width: "100%",
  padding: "12px 12px 12px 38px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1.5px solid #d7dde5",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  color: "#000" // PURE BLACK TEXT
},

  button: {
    width: "100%",
    padding: "12px 0",
    background: "#030b16",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "15px",
    border: "none",
    cursor: "pointer",
    marginTop: "6px",
    color: "#45505c",
    fontFamily: "Inter, sans-serif"
  },
  support: {
    marginTop: "24px",
    fontSize: "13px",
    color: "#8c97a6",
    fontFamily: "Inter, sans-serif"
  },
  email: {
    color: "#2f80ed",
    textDecoration: "none",
    fontWeight: 500
  },
  resultCard: {
  background: "#e8f9ee",
  border: "1px solid #b6e4c6",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "left",
  fontFamily: "Inter, sans-serif",
},
resultTitle: {
  color: "#127c37",
  fontWeight: 700,
  marginBottom: "12px",
  fontSize: "18px"
},
resultRow: {
  display: "flex",
  marginBottom: "8px"
},
resultLabel: {
  width: "130px",
  fontWeight: 600,
  color: "#333"
},
resultValue: {
  color: "#111",
  fontWeight: 500
},
errorCard: {
  background: "#fde8e8",
  border: "1px solid #f0b4b4",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
},
errorTitle: {
  color: "#c82323",
  fontWeight: 700,
  fontSize: "18px"
},
errorMsg: {
  color: "#7c2424",
  marginTop: "8px"
}

};
