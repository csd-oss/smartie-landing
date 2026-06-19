"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { APPS, COMPANY } from "@/lib/constants";

const CONTACT_EMAIL =
  APPS.find((a) => a.slug === "driver-sk")?.contactEmail ?? COMPANY.email;
const NOTIFY_HREF = `mailto:${CONTACT_EMAIL}?subject=Notify%20me%20when%20Driver%20SK%20launches`;

// Driver SK product palette (matches the app's own UI — indigo primary,
// emerald progress). Terracotta stays reserved for the smartie site chrome.
const INK = "#2C2420";
const INDIGO = "#4F46E5";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const stats = [
  { value: "985", label: "Official questions" },
  { value: "3", label: "Languages" },
  { value: "40", label: "Q mock exams" },
  { value: "100%", label: "Offline" },
];

const features = [
  {
    id: "study",
    screen: "/driver-sk/screen-study.png",
    accent: "#4F46E5",
    tint: "rgba(79,70,229,0.10)",
    tag: "Pro",
    kicker: "Smart Study",
    title: "Practice your weak spots first",
    body: "Adaptive practice that prioritizes exactly what trips you up — the questions you miss, the ones you answer slowly, and the categories you haven't mastered. Every minute counts.",
  },
  {
    id: "mock",
    screen: "/driver-sk/screen-mock.png",
    accent: "#D97706",
    tint: "rgba(217,119,6,0.10)",
    tag: "Free",
    kicker: "Realistic mock exams",
    title: "Take the test before the test",
    body: "Full-length mock exams mirror the real thing: 40 questions, 30 minutes, identical scoring. Walk in knowing exactly where you stand — no surprises on exam day.",
  },
  {
    id: "mistakes",
    screen: "/driver-sk/screen-mistakes.png",
    accent: "#E11D48",
    tint: "rgba(225,29,72,0.10)",
    tag: "Pro",
    kicker: "Master your mistakes",
    title: "Turn every mistake into knowledge",
    body: "Wrong answers go into a dedicated review deck with spaced repetition, so a slip becomes something that sticks — not the same mistake when it counts.",
  },
  {
    id: "stats",
    screen: "/driver-sk/screen-stats.png",
    accent: "#059669",
    tint: "rgba(5,150,105,0.10)",
    tag: "Free",
    kicker: "Track your readiness",
    title: "Watch yourself get ready",
    body: "A clear readiness score, accuracy trends, daily streaks, and category breakdowns show your progress at a glance — and keep you coming back.",
  },
];

const badges = [
  { icon: "⏱️", title: "Timed mock exams", sub: "40 questions, just like the real day", tag: "Free" },
  { icon: "📚", title: "All 985 questions", sub: "The full official exam bank", tag: "Free" },
  { icon: "🎯", title: "Smart Practice", sub: "Adapts to your weak spots", tag: "Pro" },
  { icon: "💪", title: "Master mistakes", sub: "Spaced repetition until it sticks", tag: "Pro" },
  { icon: "🌍", title: "Slovak · English · Magyar", sub: "Study in your language", tag: "Free" },
  { icon: "✈️", title: "Works offline", sub: "No signal, no problem", tag: "Free" },
];

const plans = [
  {
    name: "Weekly",
    note: "Flexible, cancel anytime",
    points: ["Auto-renewing weekly", "Great for a final sprint"],
    highlight: false,
  },
  {
    name: "Yearly",
    note: "3-day free trial",
    points: ["Best value over a season", "Try Pro free for 3 days", "Auto-renews yearly"],
    highlight: true,
  },
  {
    name: "Lifetime",
    note: "Pay once, keep forever",
    points: ["One-time purchase", "No subscription, ever"],
    highlight: false,
  },
];

const PHONE_RATIO = 1303 / 600;

function Phone({
  src,
  alt,
  width,
}: {
  src: string;
  alt: string;
  width: number;
}) {
  const height = Math.round(width * PHONE_RATIO);
  return (
    <div
      style={{
        borderRadius: width * 0.13,
        padding: 8,
        background: "#fff",
        border: "1px solid rgba(44,36,32,0.06)",
        boxShadow: "0 40px 80px -30px rgba(44,36,32,0.45)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: width * 0.1, display: "block" }}
      />
    </div>
  );
}

function Tag({ kind }: { kind: string }) {
  const pro = kind === "Pro";
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
        padding: "3px 9px",
        borderRadius: 100,
        color: pro ? "#fff" : "#5B8A6E",
        background: pro ? INDIGO : "rgba(91,138,110,0.14)",
      }}
    >
      {kind}
    </span>
  );
}

export default function DriverSkLanding() {
  return (
    <div
      style={{
        fontFamily:
          "'Avenir Next', 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#FBF8F4",
        color: INK,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,700&family=Nunito:wght@400;500;600;700&display=swap');
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 16,
          zIndex: 50,
          maxWidth: 920,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            background: "rgba(251,248,244,0.85)",
            backdropFilter: "blur(20px)",
            borderRadius: 100,
            padding: "12px 16px 12px 28px",
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
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Link
              href="/#apps"
              style={{
                color: "#8B7B6B",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              All apps
            </Link>
            <a
              href={NOTIFY_HREF}
              style={{
                background: INDIGO,
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "9px 18px",
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              Notify me
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          maxWidth: 1080,
          margin: "0 auto",
          padding: "72px 32px 40px",
        }}
      >
        {/* atmosphere */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: "8%",
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: "2%",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
            gap: 48,
            alignItems: "center",
          }}
          className="dsk-hero"
        >
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "6px 6px 6px 6px",
                borderRadius: 100,
                background: "#fff",
                border: "1px solid rgba(44,36,32,0.07)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                marginBottom: 24,
              }}
            >
              <Image
                src="/driver-sk-icon.png"
                alt="Driver SK app icon"
                width={28}
                height={28}
                style={{ borderRadius: 8, display: "block" }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#6B5D50",
                  paddingRight: 12,
                  letterSpacing: 0.2,
                }}
              >
                Driver SK · by Smartie
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(38px, 5.4vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Pass your Slovak driving theory exam
              <span style={{ fontStyle: "italic", fontWeight: 500, color: INDIGO }}>
                {" "}
                on the first try.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                marginTop: 24,
                fontSize: 17,
                lineHeight: 1.7,
                color: "#6B5D50",
                maxWidth: 480,
              }}
            >
              Driver SK turns the official question bank into a study plan that
              adapts to you — smart practice, realistic mock exams, and a
              readiness score that climbs every day.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}
            >
              {["985 official questions", "Slovak · English · Magyar", "100% offline"].map(
                (p) => (
                  <span
                    key={p}
                    style={{
                      padding: "8px 15px",
                      background: "#fff",
                      border: "1px solid rgba(44,36,32,0.07)",
                      borderRadius: 100,
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "#6B5D50",
                    }}
                  >
                    {p}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              <a
                href={NOTIFY_HREF}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "15px 28px",
                  background: "linear-gradient(135deg, #4F46E5, #4338CA)",
                  color: "#fff",
                  borderRadius: 100,
                  fontSize: 14.5,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 12px 30px rgba(79,70,229,0.28)",
                }}
              >
                Notify me at launch
              </a>
              <div style={{ display: "flex", gap: 8 }}>
                {["App Store", "Google Play"].map((s) => (
                  <span
                    key={s}
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      lineHeight: 1.2,
                      padding: "8px 14px",
                      borderRadius: 14,
                      border: "1px dashed rgba(44,36,32,0.2)",
                      color: "#A89888",
                      fontSize: 11,
                    }}
                  >
                    <span style={{ fontSize: 9, letterSpacing: 0.5 }}>SOON ON</span>
                    <span style={{ fontWeight: 700, fontSize: 12.5, color: "#8B7B6B" }}>
                      {s}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.15 }}
            style={{ justifySelf: "center" }}
          >
            <Phone src="/driver-sk/screen-home.png" alt="Driver SK home screen" width={300} />
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "32px" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
            background: "#fff",
            border: "1px solid rgba(44,36,32,0.06)",
            borderRadius: 24,
            padding: "28px 24px",
            boxShadow: "0 2px 24px rgba(0,0,0,0.03)",
          }}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 34,
                  fontWeight: 500,
                  color: INK,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "#A89888",
                  fontWeight: 600,
                  marginTop: 2,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "60px 32px 20px" }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 300,
            textAlign: "center",
            margin: "0 auto 8px",
            maxWidth: 620,
            lineHeight: 1.15,
          }}
        >
          A study plan that{" "}
          <span style={{ fontStyle: "italic", fontWeight: 500, color: INDIGO }}>
            adapts to you
          </span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            textAlign: "center",
            color: "#8B7B6B",
            fontSize: 15.5,
            maxWidth: 520,
            margin: "0 auto 56px",
            lineHeight: 1.6,
          }}
        >
          Instead of grinding random questions, you practice exactly what you keep
          getting wrong — and watch it stick.
        </motion.p>

        {features.map((f, i) => (
          <motion.div
            key={f.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
              gap: 40,
              alignItems: "center",
              marginBottom: 72,
            }}
            className="dsk-feature"
          >
            <motion.div
              variants={fadeUp}
              style={{ order: i % 2 === 0 ? 0 : 1 }}
              className={i % 2 === 0 ? "dsk-text-left" : "dsk-text-right"}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    color: f.accent,
                  }}
                >
                  {f.kicker}
                </span>
                <Tag kind={f.tag} />
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 26,
                  fontWeight: 500,
                  margin: "0 0 14px",
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#6B5D50", margin: 0 }}>
                {f.body}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                order: i % 2 === 0 ? 1 : 0,
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "10% 18%",
                  background: f.tint,
                  filter: "blur(40px)",
                  borderRadius: "50%",
                }}
              />
              <div style={{ position: "relative" }}>
                <Phone src={f.screen} alt={`${f.kicker} screen`} width={232} />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* EVERYTHING GRID */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "40px 32px" }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(26px, 3.6vw, 36px)",
            fontWeight: 300,
            textAlign: "center",
            margin: "0 0 44px",
          }}
        >
          Everything you need to{" "}
          <span style={{ fontStyle: "italic", fontWeight: 500, color: INDIGO }}>pass</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {badges.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              style={{
                background: "#fff",
                border: "1px solid rgba(44,36,32,0.06)",
                borderRadius: 20,
                padding: "24px 22px",
                boxShadow: "0 2px 18px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <span style={{ fontSize: 28 }}>{b.icon}</span>
                <Tag kind={b.tag} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px", color: INK }}>
                {b.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#8B7B6B", margin: 0, lineHeight: 1.5 }}>
                {b.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "56px 32px" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 12 }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(26px, 3.6vw, 36px)",
              fontWeight: 300,
              margin: "0 0 12px",
            }}
          >
            Start free.{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500, color: INDIGO }}>
              Go Pro
            </span>{" "}
            when you&apos;re ready
          </h2>
          <p
            style={{
              color: "#8B7B6B",
              fontSize: 15.5,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            All 985 questions and full mock exams are free — no account needed.
            Driver SK Pro unlocks unlimited Smart Study and Mistakes review.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 36,
            alignItems: "stretch",
          }}
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              style={{
                position: "relative",
                background: p.highlight ? INK : "#fff",
                color: p.highlight ? "#F0E6DA" : INK,
                border: p.highlight
                  ? "1px solid transparent"
                  : "1px solid rgba(44,36,32,0.08)",
                borderRadius: 22,
                padding: "28px 24px",
                boxShadow: p.highlight
                  ? "0 24px 50px -20px rgba(44,36,32,0.5)"
                  : "0 2px 18px rgba(0,0,0,0.03)",
              }}
            >
              {p.highlight && (
                <span
                  style={{
                    position: "absolute",
                    top: -11,
                    left: 24,
                    background: "linear-gradient(135deg, #4F46E5, #4338CA)",
                    color: "#fff",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: 100,
                  }}
                >
                  Best value
                </span>
              )}
              <h3
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 500,
                  margin: "0 0 4px",
                }}
              >
                {p.name}
              </h3>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: p.highlight ? "#C9B79E" : INDIGO,
                  marginBottom: 18,
                }}
              >
                {p.note}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: p.highlight ? "#D8CBBA" : "#6B5D50",
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: p.highlight ? "#86A37F" : "#5B8A6E" }}>✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <p
          style={{
            fontSize: 11.5,
            color: "#A89888",
            textAlign: "center",
            maxWidth: 620,
            margin: "28px auto 0",
            lineHeight: 1.6,
          }}
        >
          Payment is charged to your Apple ID at confirmation of purchase.
          Subscriptions renew automatically unless canceled at least 24 hours
          before the period ends; manage or cancel anytime in your App Store
          settings. Any unused portion of a free trial is forfeited when you buy a
          subscription.
        </p>
      </section>

      {/* CTA BAND */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "20px 32px 80px" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #4F46E5, #4338CA)",
            borderRadius: 32,
            padding: "56px 40px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -40,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              filter: "blur(10px)",
            }}
          />
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              margin: "0 0 10px",
              position: "relative",
            }}
          >
            Free for 3 days.{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>Cancel anytime.</span>
          </h2>
          <p
            style={{
              fontSize: 15.5,
              color: "rgba(255,255,255,0.82)",
              margin: "0 0 28px",
              position: "relative",
            }}
          >
            Driver SK is launching soon. Be the first to know.
          </p>
          <a
            href={NOTIFY_HREF}
            style={{
              position: "relative",
              display: "inline-block",
              padding: "15px 34px",
              background: "#fff",
              color: INDIGO,
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 14px 30px rgba(0,0,0,0.2)",
            }}
          >
            Notify me at launch
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "12px 32px 48px",
          textAlign: "center",
          fontSize: 12,
          color: "#A89888",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 14,
          }}
        >
          <Link href="/driver-sk/support" style={{ color: "#8B7B6B", textDecoration: "none" }}>
            Support
          </Link>
          <Link href="/driver-sk/privacy" style={{ color: "#8B7B6B", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <Link href="/driver-sk/terms" style={{ color: "#8B7B6B", textDecoration: "none" }}>
            Terms of Service
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#8B7B6B", textDecoration: "none" }}>
            {CONTACT_EMAIL}
          </a>
        </div>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} {COMPANY.name} — IČO: {COMPANY.ico}
        </p>
      </footer>

      <style>{`
        @media (max-width: 760px) {
          .dsk-hero { grid-template-columns: 1fr !important; }
          .dsk-feature { grid-template-columns: 1fr !important; }
          .dsk-feature .dsk-text-left,
          .dsk-feature .dsk-text-right { order: 0 !important; }
        }
      `}</style>
    </div>
  );
}
