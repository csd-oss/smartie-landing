import type { Metadata } from "next";
import Link from "next/link";
import { APPS, COMPANY } from "@/lib/constants";

const CONTACT_EMAIL =
  APPS.find((a) => a.slug === "driver-sk")?.contactEmail ?? COMPANY.email;

export const metadata: Metadata = {
  title: "Driver SK — Support",
};

export default function DriverSkSupport() {
  return (
    <div
      style={{
        fontFamily:
          "'Avenir Next', 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#FBF8F4",
        color: "#2C2420",
        minHeight: "100vh",
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
            <Link
              href="/#about"
              style={{ color: "#8B7B6B", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              href="/#apps"
              style={{ color: "#8B7B6B", textDecoration: "none" }}
            >
              Apps
            </Link>
            <Link
              href="/#contact"
              style={{ color: "#8B7B6B", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 32px 60px",
        }}
      >
        <header>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#C4633F",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 12,
            }}
          >
            Driver SK · Support
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 36,
              fontWeight: 500,
              margin: "0 0 8px",
            }}
          >
            Support
          </h1>
          <p style={{ fontSize: 15, color: "#8B7B6B", margin: 0 }}>
            Help with Driver SK — your Slovak driving theory exam companion.
          </p>
        </header>

        <div
          style={{
            marginTop: 48,
            fontSize: 14,
            lineHeight: 1.8,
            color: "#6B5D50",
          }}
        >
          <Section title="Contact us">
            <p>
              Need help with Driver SK? Email us and we&apos;ll get back to you —
              we typically reply within <strong>2 business days</strong>.
            </p>
            <div>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Driver%20SK%20support`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #C4633F, #A85232)",
                  color: "#fff",
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(196,99,63,0.25)",
                }}
              >
                Email support
              </a>
            </div>
            <p>
              Or write directly to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Frequently asked questions">
            <Faq question="How do I restore my purchase on a new device?">
              Open <strong>Settings → Subscription → Manage subscription</strong>{" "}
              (or <strong>Restore purchases</strong>). Purchases are tied to your
              Apple ID, so signing in with the same Apple ID restores Driver SK
              Pro.
            </Faq>

            <Faq question="How do I cancel my subscription?">
              Go to <strong>Settings → Subscription → Manage subscription</strong>{" "}
              to open Apple&apos;s subscription management, where you can cancel.
              You can also cancel from{" "}
              <a
                href="https://apps.apple.com/account/subscriptions"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                iOS Settings → your name → Subscriptions
              </a>
              .
            </Faq>

            <Faq question="How do I request a refund?">
              Refunds are handled by Apple, not by us. Visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                reportaproblem.apple.com
              </a>
              , sign in with your Apple ID, and request a refund for Driver SK.
            </Faq>

            <Faq question="I'm not receiving study reminders.">
              Make sure notifications are enabled in the app
              (<strong>Settings → Notifications</strong>) and in{" "}
              <strong>iOS Settings → Driver SK → Notifications</strong>.
            </Faq>

            <Faq question="How do I reset my progress?">
              Open <strong>Settings → Reset Progress</strong>. This permanently
              erases your local study data and cannot be undone.
            </Faq>

            <Faq question="Is my data private?">
              Yes. Your study data stays on your device, and analytics are
              anonymous and can be turned off in{" "}
              <strong>Settings → Analytics</strong>. See our{" "}
              <Link
                href="/driver-sk/privacy"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </Faq>
          </Section>

          <Section title="Legal">
            <p>
              Read the{" "}
              <Link
                href="/driver-sk/privacy"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/driver-sk/terms"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                Terms of Service
              </Link>{" "}
              for Driver SK.
            </p>
          </Section>
        </div>
      </article>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: 720,
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/driver-sk/support"
            style={{ color: "#C4633F", fontSize: 12, textDecoration: "none" }}
          >
            Driver SK Support
          </Link>
          <Link
            href="/driver-sk/privacy"
            style={{ color: "#A89888", fontSize: 12, textDecoration: "none" }}
          >
            Driver SK Privacy Policy
          </Link>
          <Link
            href="/driver-sk/terms"
            style={{ color: "#A89888", fontSize: 12, textDecoration: "none" }}
          >
            Driver SK Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 40 }}>
      <h2
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 20,
          fontWeight: 500,
          color: "#2C2420",
          margin: "0 0 16px",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}

function Faq({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p style={{ fontWeight: 600, color: "#2C2420", margin: "8px 0 4px" }}>
        {question}
      </p>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}
