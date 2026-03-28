import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
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
            Legal
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 36,
              fontWeight: 500,
              margin: "0 0 8px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: "#A89888", margin: 0 }}>
            Last updated: March 27, 2026
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
          <Section title="1. Introduction">
            <p>
              {COMPANY.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;), a company registered in the Slovak Republic with
              IČO {COMPANY.ico}, having its registered office at{" "}
              {COMPANY.fullAddress}, is committed to protecting your privacy.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect
              information when you use our mobile applications and visit our
              website at {COMPANY.url}.
            </p>
          </Section>

          <Section title="2. Data We Collect">
            <H3>Mobile Applications</H3>
            <p>
              Our mobile applications are designed to work entirely offline. We
              do not collect, store, or transmit personal data from our apps to
              any external servers. All your data — including progress, settings,
              and preferences — is stored locally on your device.
            </p>

            <H3>Optional Analytics</H3>
            <p>
              Some of our apps may include optional, anonymized usage analytics
              to help us improve the user experience. You can opt out of
              analytics at any time from the app settings. When analytics are
              enabled, we may collect:
            </p>
            <Ul>
              <li>Anonymous usage patterns (screens viewed, features used)</li>
              <li>Device type and operating system version</li>
              <li>App version</li>
              <li>Crash reports</li>
            </Ul>
            <p>
              This data is anonymized and cannot be used to identify you
              personally.
            </p>

            <H3>Website</H3>
            <p>
              Our website does not use cookies or tracking technologies. We do
              not collect personal data through our website unless you contact us
              directly via email.
            </p>
          </Section>

          <Section title="3. How We Use Your Data">
            <p>
              When analytics data is collected (with your consent), we use it
              solely to:
            </p>
            <Ul>
              <li>Improve app functionality and user experience</li>
              <li>Identify and fix bugs and crashes</li>
              <li>Understand which features are most valuable to users</li>
            </Ul>
            <p>
              We do not sell, rent, or share your data with third parties for
              marketing purposes.
            </p>
          </Section>

          <Section title="4. Data Storage and Security">
            <p>
              All app data is stored locally on your device using secure,
              industry-standard storage mechanisms. We do not operate servers
              that store your personal data.
            </p>
            <p>
              If you delete an app, all locally stored data will be permanently
              removed from your device.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>Our apps may use the following third-party services:</p>
            <Ul>
              <li>
                <strong>Apple App Store / Google Play Store:</strong> These
                platforms have their own privacy policies governing app
                distribution and payments.
              </li>
              <li>
                <strong>PostHog (optional analytics):</strong> When analytics are
                enabled, anonymized usage data may be processed by PostHog. See
                their privacy policy at posthog.com/privacy.
              </li>
            </Ul>
          </Section>

          <Section title="6. Your Rights Under GDPR">
            <p>
              As a company operating within the European Union, we comply with
              the General Data Protection Regulation (GDPR). You have the right
              to:
            </p>
            <Ul>
              <li>
                <strong>Access</strong> — request a copy of any personal data we
                hold about you
              </li>
              <li>
                <strong>Rectification</strong> — request correction of
                inaccurate data
              </li>
              <li>
                <strong>Erasure</strong> — request deletion of your personal data
              </li>
              <li>
                <strong>Restriction</strong> — request restriction of processing
              </li>
              <li>
                <strong>Portability</strong> — request your data in a portable
                format
              </li>
              <li>
                <strong>Objection</strong> — object to processing of your data
              </li>
            </Ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                {COMPANY.email}
              </a>
              .
            </p>
            <p>
              You also have the right to lodge a complaint with the Slovak
              supervisory authority: Úrad na ochranu osobných údajov Slovenskej
              republiky (Office for Personal Data Protection of the Slovak
              Republic).
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              Our apps are not directed at children under the age of 16. We do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact
              us and we will promptly delete it.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date. We encourage you to review this policy
              periodically.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <Ul>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  style={{ color: "#C4633F", textDecoration: "underline" }}
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>Phone: {COMPANY.phone}</li>
              <li>Address: {COMPANY.fullAddress}</li>
              <li>
                Company: {COMPANY.name}, IČO: {COMPANY.ico}
              </li>
            </Ul>
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
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <Link
            href="/privacy"
            style={{ color: "#C4633F", fontSize: 12, textDecoration: "none" }}
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 15,
        fontWeight: 600,
        color: "#2C2420",
        margin: "8px 0 0",
      }}
    >
      {children}
    </h3>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        margin: 0,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {children}
    </ul>
  );
}
