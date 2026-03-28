"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY, APPS } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <div
      style={{
        fontFamily:
          "'Avenir Next', 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#FBF8F4",
        color: "#2C2420",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,700&family=Nunito:wght@400;500;600;700&display=swap');
      `}</style>

      {/* FLOATING NAV */}
      <nav
        style={{
          position: "sticky",
          top: 16,
          zIndex: 50,
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: "rgba(251,248,244,0.85)",
            backdropFilter: "blur(20px)",
            borderRadius: 100,
            padding: "12px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid rgba(44,36,32,0.08)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#C4633F",
              textDecoration: "none",
            }}
          >
            smartie
          </Link>
          <div
            style={{ display: "flex", gap: 20, fontSize: 13, fontWeight: 500 }}
          >
            <a
              href="#about"
              style={{ color: "#8B7B6B", textDecoration: "none" }}
            >
              About
            </a>
            <a
              href="#apps"
              style={{ color: "#8B7B6B", textDecoration: "none" }}
            >
              Apps
            </a>
            <a
              href="#contact"
              style={{ color: "#8B7B6B", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "120px 32px 100px",
          textAlign: "center",
        }}
      >
        {/* Decorative blob */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,99,63,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 200,
            left: "5%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(134,163,127,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <motion.h1
          variants={fadeIn}
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.15,
            margin: 0,
            color: "#2C2420",
          }}
        >
          Apps that feel like they were
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              color: "#C4633F",
            }}
          >
            {" "}
            made just for you
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          style={{
            marginTop: 28,
            fontSize: 17,
            lineHeight: 1.7,
            color: "#8B7B6B",
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We create mobile applications that make complex tasks simple and
          accessible to everyone.
        </motion.p>

        <motion.div variants={fadeIn} style={{ marginTop: 40 }}>
          <a
            href="#apps"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 32px",
              background: "linear-gradient(135deg, #C4633F, #A85232)",
              color: "#fff",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(196,99,63,0.25)",
              transition: "transform 0.2s",
            }}
          >
            Explore our apps ↓
          </a>
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={fadeIn}
            style={{
              background: "linear-gradient(135deg, #F7F1EA, #F0E6DA)",
              borderRadius: 32,
              padding: "48px 40px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 28,
                fontWeight: 500,
                margin: "0 0 20px",
              }}
            >
              A small company with a big heart
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#6B5D50",
                margin: "0 0 16px",
              }}
            >
              {COMPANY.name} is a software development company registered in
              Bratislava, Slovakia. We specialize in building mobile applications
              that solve real, everyday problems — from education and
              productivity to making complex processes accessible to everyone.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#6B5D50",
                margin: 0,
              }}
            >
              Our approach is focused on quality and attention to detail. Every
              app we build is designed to work reliably, look beautiful, and
              respect our users&apos; time and data.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* APPS */}
      <section
        id="apps"
        style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px 80px" }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2
            variants={fadeIn}
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 28,
              fontWeight: 500,
              marginBottom: 32,
            }}
          >
            What we&apos;re building
          </motion.h2>

          {APPS.map((app) => (
            <motion.div
              key={app.slug}
              variants={fadeIn}
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "36px 32px",
                marginBottom: 16,
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                border: "1px solid rgba(44,36,32,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #86A37F, #6B8A64)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  🚗
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {app.name}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#86A37F",
                      fontWeight: 600,
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#8B7B6B",
                  margin: "0 0 20px",
                }}
              >
                {app.description}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {app.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      padding: "6px 14px",
                      background: "#F7F1EA",
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#6B5D50",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeIn}
            style={{
              marginTop: 8,
              padding: "24px 32px",
              borderRadius: 20,
              background: "#F7F1EA",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 14, color: "#A89888", margin: 0 }}>
              More apps are currently in development. Stay tuned.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 32px 80px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #2C2420, #3D3229)",
            borderRadius: 32,
            padding: "48px 40px",
            color: "#F0E6DA",
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 28,
              fontWeight: 500,
              margin: "0 0 8px",
            }}
          >
            Let&apos;s connect
          </h2>
          <p style={{ fontSize: 14, color: "#A89888", margin: "0 0 32px" }}>
            We&apos;d love to hear from you
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#8B7B6B",
                  marginBottom: 8,
                }}
              >
                Email
              </div>
              <a
                href={`mailto:${COMPANY.email}`}
                style={{
                  color: "#F0E6DA",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                {COMPANY.email}
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#8B7B6B",
                  marginBottom: 8,
                }}
              >
                Phone
              </div>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                style={{
                  color: "#F0E6DA",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#8B7B6B",
                  marginBottom: 8,
                }}
              >
                Address
              </div>
              <span style={{ fontSize: 15 }}>{COMPANY.fullAddress}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "24px 32px 40px",
          textAlign: "center",
          fontSize: 12,
          color: "#A89888",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          © {new Date().getFullYear()} {COMPANY.name} — IČO: {COMPANY.ico}
        </p>
        <p style={{ margin: "0 0 8px" }}>
          {COMPANY.fullAddress} — {COMPANY.court}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <Link
            href="/privacy"
            style={{ color: "#A89888", fontSize: 12, textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            style={{ color: "#A89888", fontSize: 12, textDecoration: "none" }}
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
