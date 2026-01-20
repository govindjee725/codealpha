import Image from "next/image";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* TOP SECTION */}
        <div style={styles.topRow}>
          
          {/* LEFT INFO BOX */}
          <div style={styles.leftInfo}>
            <Image src="/image.png" width={120} height={50} alt="logo" />
            <p style={styles.desc}>
              Empowering the next generation of tech leaders through virtual internships,
              hands-on coding practice, and industry-standard mentorship.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div style={styles.newsletterBox}>
            <h3 style={styles.newsletterTitle}>Join our Newsletter</h3>
            <p style={styles.newsletterDesc}>
              Get the latest internship updates, tech tutorials, and exclusive resources weekly.
            </p>

            <div style={styles.newsletterInputWrapper}>
              <input type="email" placeholder="Enter your email" style={styles.newsletterInput} />
              <button style={styles.subscribeBtn}>
                Subscribe ✈
              </button>
            </div>
          </div>
        </div>

        <hr style={styles.separator} />

        {/* LINK GROUPS */}
        <div style={styles.linksRow}>
          <div>
            <h4 style={styles.linkTitle}>Explore</h4>
            <p style={styles.linkItem}>Virtual Internships</p>
            <p style={styles.linkItem}>Coding Practice</p>
            <p style={styles.linkItem}>Video Tutorials</p>
            <p style={styles.linkItem}>Tech Quizzes</p>
            <p style={styles.linkItem}>Online Compiler</p>
          </div>

          <div>
            <h4 style={styles.linkTitle}>Company</h4>
            <p style={styles.linkItem}>About Us</p>
            <p style={styles.linkItem}>Careers</p>
            <p style={styles.linkItem}>Blog</p>
            <p style={styles.linkItem}>Partners</p>
            <p style={styles.linkItem}>Verify Certificate</p>
          </div>

          <div>
            <h4 style={styles.linkTitle}>Resources</h4>
            <p style={styles.linkItem}>ATS Checker</p>
            <p style={styles.linkItem}>Interview Prep</p>
            <p style={styles.linkItem}>Testimonials</p>
            <p style={styles.linkItem}>Help Center</p>
          </div>

          <div>
            <h4 style={styles.linkTitle}>Contact Us</h4>
            <p style={styles.contactItem}>📍 Lucknow, Uttar Pradesh, India</p>
            <p style={styles.contactItem}>📞 +91 9333656683</p>
            <p style={styles.contactItem}>✉ services@codealpha.tech</p>
            <p style={styles.contactItem}>🌐 www.codealpha.tech</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© 2026 CodeAlpha. All rights reserved.</p>

        <div style={styles.bottomRight}>
          <p style={styles.policyLink}>Privacy Policy</p>
          <p style={styles.policyLink}>Terms of Service</p>
          <p style={styles.policyLink}>Cookies</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    background: "#0d1117",
    paddingTop: "60px",
    paddingBottom: "40px",
    color: "#c9d1d9",
    fontFamily: "Inter, sans-serif"
  },
  container: {
    width: "85%",
    margin: "0 auto"
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px"
  },
  leftInfo: {
    width: "45%"
  },
  desc: {
    marginTop: "14px",
    lineHeight: "24px",
    maxWidth: "420px",
  },
  newsletterBox: {
    width: "45%",
    background: "rgba(255,255,255,0.05)",
    padding: "26px",
    borderRadius: "14px"
  },
  newsletterTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "6px"
  },
  newsletterDesc: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "20px"
  },
  newsletterInputWrapper: {
    display: "flex",
    gap: "12px"
  },
  newsletterInput: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "rgba(255,255,255,0.05)",
    color: "#fff"
  },
  subscribeBtn: {
    background: "linear-gradient(90deg, #4b83ff, #47b8ff)",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer"
  },
  separator: {
    border: "none",
    borderTop: "1px solid #1f2937",
    margin: "40px 0"
  },
  linksRow: {
    display: "flex",
    justifyContent: "space-between",
    color: "#e5e7eb"
  },
  linkTitle: {
    fontWeight: 600,
    marginBottom: "10px"
  },
  linkItem: {
    fontSize: "14px",
    marginBottom: "8px",
    color: "#9ca3af",
    cursor: "pointer"
  },
  contactItem: {
    fontSize: "14px",
    marginBottom: "8px",
    color: "#9ca3af"
  },
  bottomBar: {
    marginTop: "40px",
    borderTop: "1px solid #1f2937",
    paddingTop: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bottomText: {
    fontSize: "13px",
    color: "#6b7280"
  },
  bottomRight: {
    display: "flex",
    gap: "20px"
  },
  policyLink: {
    fontSize: "13px",
    color: "#6b7280",
    cursor: "pointer"
  }
};
