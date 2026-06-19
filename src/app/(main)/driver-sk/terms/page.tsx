import type { Metadata } from "next";
import Link from "next/link";
import { APPS, COMPANY } from "@/lib/constants";

const CONTACT_EMAIL =
  APPS.find((a) => a.slug === "driver-sk")?.contactEmail ?? COMPANY.email;

export const metadata: Metadata = {
  title: "Driver SK — Terms of Service",
};

export default function DriverSkTermsOfService() {
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
            Driver SK · Legal
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 36,
              fontWeight: 500,
              margin: "0 0 8px",
            }}
          >
            Terms of Service
          </h1>
          <p style={{ fontSize: 13, color: "#A89888", margin: 0 }}>
            Last updated: June 10, 2026
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
              These Terms of Service (&ldquo;Terms&rdquo;) apply to the Driver SK
              mobile app, published by {COMPANY.name} (&ldquo;we&rdquo;,
              &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a company registered in
              the Slovak Republic with IČO {COMPANY.ico}, having its registered
              office at {COMPANY.fullAddress}. By downloading, installing, or
              using Driver SK, you agree to these Terms.
            </p>
            <p>
              For purchases made through Apple&apos;s App Store, Apple&apos;s
              standard Licensed Application End User License Agreement (EULA) also
              applies:{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                apple.com/legal/internet-services/itunes/dev/stdeula
              </a>
              .
            </p>
          </Section>

          <Section title="2. What the App Is">
            <p>
              Driver SK is a study aid for the Slovak driving-licence theory
              test. Question content is based on the official published question
              bank and is provided for practice purposes.
            </p>
          </Section>

          <Section title="3. No Guarantee of Exam Results">
            <p>
              The app helps you prepare, including a &ldquo;readiness&rdquo;
              estimate based on your practice history. This estimate is
              informational only. <strong>We do not guarantee that you will
              pass any examination</strong>, and we are not affiliated with the
              Slovak Ministry of Interior or any examination authority.
            </p>
            <p>
              Official rules, question wording, and scoring may change. While we
              strive to keep all content accurate and up to date, we do not
              warrant that the questions, answers, or other content are
              error-free or reflect the most current version of any official
              examination. Always verify current requirements with the relevant
              authority.
            </p>
          </Section>

          <Section title="4. Subscriptions and Purchases">
            <p>
              Some features require Driver SK Pro, available as an auto-renewing
              subscription (weekly or yearly, the yearly option may include a
              free trial) or a one-time lifetime purchase:
            </p>
            <Ul>
              <li>
                Payment is charged to your Apple ID at confirmation of purchase.
              </li>
              <li>
                Subscriptions renew automatically unless cancelled at least 24
                hours before the end of the current period; your account is
                charged for renewal within 24 hours before the period ends.
              </li>
              <li>
                You can manage or cancel subscriptions in your App Store account
                settings, or via Settings → Subscription in the app.
              </li>
              <li>
                Any unused portion of a free trial is forfeited when you purchase
                a subscription.
              </li>
              <li>Refunds are handled by Apple under their standard policies.</li>
            </Ul>
          </Section>

          <Section title="5. Acceptable Use">
            <p>
              You may use Driver SK for personal, non-commercial study. You may
              not copy, scrape, resell, or redistribute the app or its content,
              or attempt to bypass the purchase mechanism.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All design, code, and trademarks within Driver SK are owned by{" "}
              {COMPANY.name} and are protected by international copyright,
              trademark, and other intellectual property laws. The exam questions
              and related materials are sourced from publicly available official
              materials and are used for educational purposes.
            </p>
          </Section>

          <Section title="7. Disclaimer and Liability">
            <p>
              Driver SK is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo;, without warranties of any kind, either express or
              implied. To the maximum extent permitted by applicable law,{" "}
              {COMPANY.name} shall not be liable for any indirect, incidental,
              special, or consequential damages arising from or related to your
              use of the app. Nothing in these Terms limits liability that cannot
              be limited under applicable law.
            </p>
          </Section>

          <Section title="8. Termination">
            <p>
              We may suspend or terminate your access to Driver SK if you
              materially breach these Terms. You may stop using the app at any
              time by uninstalling it from your device.
            </p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>
              We may update these Terms as the app evolves. Continued use after
              an update constitutes acceptance of the new Terms. Material changes
              will be noted in the app&apos;s release notes.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of the Slovak Republic. Any
              disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts of Bratislava, Slovak Republic.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have questions about these Terms, please contact us:</p>
            <Ul>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{ color: "#C4633F", textDecoration: "underline" }}
                >
                  {CONTACT_EMAIL}
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
            style={{ color: "#A89888", fontSize: 12, textDecoration: "none" }}
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
            style={{ color: "#C4633F", fontSize: 12, textDecoration: "none" }}
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
