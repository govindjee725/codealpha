"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header style={styles.navbar}>
      <div style={styles.left}>
        <Image src="/image.png" width={100} height={40} alt="logo" />
      </div>

      <nav style={styles.center}>
        <a style={styles.link}>HOME</a>
        <a style={styles.link}>INTERNSHIPS ▼</a>
        <a style={styles.link}>CAREER TOOLS ▼</a>
        <a style={styles.link}>TUTORIALS</a>
        <a style={styles.link}>PRACTICE</a>
        <a style={styles.link}>COMPILER</a>
        <a style={styles.link}>QUIZ ▼</a>
        <a style={styles.link}>MORE ▼</a>
      </nav>

      <div style={styles.right}>
        <button style={styles.loginBtn}>Login / Sign Up →</button>
      </div>
    </header>
  );
}

const styles = {
  navbar: {
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    borderBottom: "1px solid #e5e7eb",
    background: "#fff",
  },
  left: { display: "flex", alignItems: "center" },
  center: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },
  link: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#3f4b5b",
    cursor: "pointer",
  },
  right: { display: "flex", alignItems: "center", gap: "12px" },
  loginBtn: {
    background: "#0d1321",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
