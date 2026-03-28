import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
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
            Terms of Service
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
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              mobile applications and services provided by {COMPANY.name}{" "}
              (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a
              company registered in the Slovak Republic with IČO {COMPANY.ico},
              having its registered office at {COMPANY.fullAddress}.
            </p>
            <p>
              By downloading, installing, or using any of our applications, you
              agree to be bound by these Terms. If you do not agree, please do
              not use our applications.
            </p>
          </Section>

          <Section title="2. Definitions">
            <Ul>
              <li>
                <strong>&ldquo;Company&rdquo;</strong> refers to {COMPANY.name},
                IČO {COMPANY.ico}.
              </li>
              <li>
                <strong>&ldquo;App&rdquo;</strong> or{" "}
                <strong>&ldquo;Application&rdquo;</strong> refers to any mobile
                application published by the Company.
              </li>
              <li>
                <strong>&ldquo;User&rdquo;</strong> or{" "}
                <strong>&ldquo;You&rdquo;</strong> refers to any individual who
                downloads, installs, or uses our Applications.
              </li>
              <li>
                <strong>&ldquo;Service&rdquo;</strong> refers to the
                functionality provided by our Applications and website.
              </li>
            </Ul>
          </Section>

          <Section title="3. License Grant">
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to download, install, and use our Applications on your
              personal device for personal, non-commercial purposes, subject to
              these Terms.
            </p>
          </Section>

          <Section title="4. Restrictions">
            <p>You agree not to:</p>
            <Ul>
              <li>
                Copy, modify, distribute, sell, or lease any part of our
                Applications
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract the source
                code of our Applications
              </li>
              <li>
                Use our Applications for any unlawful purpose or in violation of
                any applicable laws
              </li>
              <li>
                Remove, alter, or obscure any copyright or proprietary notices
              </li>
              <li>
                Use our Applications to develop competing products or services
              </li>
            </Ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All content, features, functionality, design, code, and trademarks
              within our Applications are owned by {COMPANY.name} and are
              protected by international copyright, trademark, and other
              intellectual property laws.
            </p>
            <p>
              The content provided within our educational applications (such as
              exam questions and related materials) is sourced from publicly
              available official materials and is used for educational purposes.
            </p>
          </Section>

          <Section title="6. Disclaimers">
            <p>
              Our Applications are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, either express or
              implied.
            </p>
            <p>
              <strong>Educational applications disclaimer:</strong> Our
              educational applications (including Driver SK) are study aids
              designed to help users prepare for official examinations. They are
              not a substitute for official driving instruction, professional
              training, or the official examination process. We do not guarantee
              that using our applications will result in passing any official
              examination.
            </p>
            <p>
              While we strive to keep all content accurate and up to date, we do
              not warrant that the questions, answers, or other educational
              content in our applications are error-free or reflect the most
              current version of any official examination.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, {COMPANY.name}{" "}
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, or goodwill, arising from or related to
              your use of our Applications.
            </p>
            <p>
              Our total liability for any claims arising from or related to these
              Terms or our Applications shall not exceed the amount you paid to
              us (if any) in the twelve months preceding the claim.
            </p>
          </Section>

          <Section title="8. User Data">
            <p>
              Our Applications store data locally on your device. You are
              responsible for maintaining the security of your device and any
              data stored within our Applications. We are not responsible for
              data loss resulting from device damage, loss, or app deletion.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              We may terminate or suspend your access to our Applications at any
              time, without prior notice, for conduct that we believe violates
              these Terms or is harmful to other users, us, or third parties.
            </p>
            <p>
              You may terminate your use at any time by uninstalling our
              Applications from your device.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting the updated Terms on our
              website. Your continued use of our Applications after any changes
              constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Slovak Republic. Any disputes arising from these
              Terms shall be subject to the exclusive jurisdiction of the courts
              of Bratislava, Slovak Republic.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions about these Terms, please contact us:
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
            style={{ color: "#A89888", fontSize: 12, textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            style={{ color: "#C4633F", fontSize: 12, textDecoration: "none" }}
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
