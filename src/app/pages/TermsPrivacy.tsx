import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LightBeamDivider } from '../components/LightBeamDivider';

export function TermsPrivacy() {
  return (
    <div className="w-full min-h-screen bg-black font-['Nunito',sans-serif] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1000px] mx-auto px-6 lg:px-12 pt-[140px] pb-[80px]">
        <h1 className="text-[40px] md:text-[56px] font-bold text-white mb-12">Terms & Privacy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-[#D7D7D7] prose-headings:text-white prose-a:text-[#00D661] space-y-8">
          
          <section>
            <h2 className="text-[28px] font-bold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Monio Labs. These Terms of Service and Privacy Policy govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] font-bold mb-4">2. Use of Services</h2>
            <p className="leading-relaxed mb-4">
              Our services provide borderless OTC for business treasury, allowing institutions to trade, convert, and settle crypto-fiat. You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be of legal age and have the authority to enter into these terms.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree not to engage in any activity that interferes with or disrupts the services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] font-bold mb-4">3. Privacy Policy</h2>
            <p className="leading-relaxed mb-4">
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
            </p>
            <h3 className="text-[20px] font-bold mb-2 text-white">3.1 Information We Collect</h3>
            <p className="leading-relaxed mb-4">
              We may collect personal information such as your name, email address, contact details, and institutional information when you register or use our services. We may also collect technical data such as IP addresses and usage patterns.
            </p>
            <h3 className="text-[20px] font-bold mb-2 text-white">3.2 How We Use Information</h3>
            <p className="leading-relaxed">
              We use the collected information to provide, maintain, and improve our services, communicate with you, ensure compliance with legal obligations, and protect our platform against fraud and security threats.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] font-bold mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption and secure server infrastructure. While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] font-bold mb-4">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our platform integrates with third-party service providers, such as custodians and liquidity partners (e.g., Cobo, Fireblocks). Your interaction with these third parties may be subject to their respective terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] font-bold mb-4">6. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify you of any material changes by posting the updated terms on our website. Your continued use of the services after such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] font-bold mb-4">7. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about these Terms or our Privacy Policy, please contact us at <a href="mailto:enquiry@moniolabs.com" className="font-bold hover:underline">enquiry@moniolabs.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
