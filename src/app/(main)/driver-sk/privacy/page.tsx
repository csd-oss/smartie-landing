import type { Metadata } from "next";
import Link from "next/link";
import { APPS, COMPANY } from "@/lib/constants";

const CONTACT_EMAIL =
  APPS.find((a) => a.slug === "driver-sk")?.contactEmail ?? COMPANY.email;

export const metadata: Metadata = {
  title: "Driver SK — Privacy Policy",
};

export default function DriverSkPrivacyPolicy() {
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
            Privacy Policy
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
              Driver SK is an offline-first study app for the Slovak
              driving-licence theory test, available in Slovak, English, and
              Hungarian. It is published by {COMPANY.name}, a company registered
              in the Slovak Republic with IČO {COMPANY.ico}, having its
              registered office at {COMPANY.fullAddress}.
            </p>
            <p>
              This Privacy Policy explains what data the Driver SK app handles
              and what choices you have. It applies to the Driver SK app only.
            </p>
          </Section>

          <Section title="2. At a glance">
            <Ul>
              <li>
                Driver SK works <strong>without an account</strong>. We do not
                know your name, email, or phone number.
              </li>
              <li>
                Your study progress and preferences are stored{" "}
                <strong>locally on your device</strong> and never leave it.
              </li>
              <li>
                We collect <strong>anonymous usage analytics</strong>, which you
                can turn off in Settings.
              </li>
              <li>
                Purchases are processed by <strong>Apple</strong> and{" "}
                <strong>RevenueCat</strong>; we never see your payment details.
              </li>
            </Ul>
          </Section>

          <Section title="3. Data Stored Only on Your Device">
            <p>
              All of your study data is stored locally in a database on your
              device and is not transmitted to us. This includes:
            </p>
            <Ul>
              <li>Your answers, mistakes, streaks, and mock-exam history</li>
              <li>
                Your language, category, notification, and readiness-mode
                preferences
              </li>
            </Ul>
            <p>
              Deleting the app deletes this data. The &ldquo;Reset
              Progress&rdquo; option in Settings also erases it.
            </p>
          </Section>

          <Section title="4. Anonymous Analytics (PostHog)">
            <p>
              To understand how the app is used and to improve it, we collect
              anonymous usage events through PostHog (PostHog EU/US,
              posthog.com), such as:
            </p>
            <Ul>
              <li>Screens viewed and buttons tapped</li>
              <li>
                Study activity (for example, a question answered correctly or
                incorrectly), mock-exam outcomes, and onboarding progress
              </li>
              <li>App errors and crashes</li>
              <li>
                Device type, OS version, app version, and a{" "}
                <strong>random installation identifier</strong>
              </li>
            </Ul>
            <p>
              The installation identifier is random, created on first launch,
              and is not linked to your identity. We do not collect names, email
              addresses, contacts, location, photos, or advertising identifiers,
              and we do not track you across other apps or websites.
            </p>
            <p>
              <strong>Opt-out:</strong> Settings → Analytics. When you opt out,
              no analytics events are sent.
            </p>
          </Section>

          <Section title="5. Purchases (Apple & RevenueCat)">
            <p>
              Driver SK Pro is available as a subscription or a one-time
              purchase. Purchases are processed by Apple. We use RevenueCat
              (revenuecat.com) to validate purchases and manage subscription
              status. RevenueCat receives an anonymous app-user identifier and
              your purchase receipt from Apple — never your payment details. See
              RevenueCat&apos;s privacy policy at{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                revenuecat.com/privacy
              </a>
              .
            </p>
          </Section>

          <Section title="6. Notifications">
            <p>
              Study reminders are <strong>local notifications</strong> scheduled
              on your device. No push tokens are created and no notification data
              is sent to any server. You can disable each reminder in Settings or
              in your system notification settings.
            </p>
          </Section>

          <Section title="7. Data Sharing and Sale">
            <p>
              We do not sell, rent, or share your data with third parties beyond
              the service providers named above (PostHog for analytics, and
              RevenueCat and Apple for purchases), who process it on our behalf.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Driver SK contains no age-restricted content and is rated 4+ on the
              App Store, making it suitable for all ages. It collects no personal
              information from anyone, including children. If you believe a child
              has provided us with personal data, please contact us and we will
              promptly delete it.
            </p>
          </Section>

          <Section title="9. Your Rights Under GDPR">
            <p>
              {COMPANY.name} operates within the European Union and complies with
              the General Data Protection Regulation (GDPR). The analytics data
              we collect is anonymous and cannot be linked back to you. If you
              have any question or request regarding your data — including
              deletion of analytics data associated with your installation
              identifier, where technically possible — contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "#C4633F", textDecoration: "underline" }}
              >
                {CONTACT_EMAIL}
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

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy as the app evolves. The current
              version is always available at this address, and material changes
              will be noted in the app&apos;s release notes with an updated
              &ldquo;Last updated&rdquo; date.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
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
            style={{ color: "#C4633F", fontSize: 12, textDecoration: "none" }}
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
