import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GetStarted } from '../components/GetStarted';
import { Mail, MessageSquare, Phone, Plus, Minus, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get in touch with our technical support team for detailed inquiries and troubleshooting.',
    contact: 'support@moniolabs.com',
    action: 'Send an email'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Instant assistance for urgent operational matters or quick questions regarding our APIs.',
    contact: 'Available 24/7',
    action: 'Start a chat'
  },
  {
    icon: Phone,
    title: 'Enterprise Sales',
    description: 'Discuss customized deployment options, volume pricing, and institutional partnerships.',
    contact: '+1 (888) 123-4567',
    action: 'Call sales team'
  }
];

const faqs = [
  {
    question: 'How long does it take to integrate the Moniolabs API?',
    answer: 'Integration timelines vary based on your specific requirements and existing infrastructure. However, our comprehensive documentation and dedicated integration engineers typically enable partners to complete initial testnet deployment within 2-4 weeks.'
  },
  {
    question: 'What level of security is applied to digital asset custody?',
    answer: 'We utilize a multi-layered security approach featuring Zero-Trust architecture, Hardware Security Modules (HSM), and Secure Multi-Party Computation (MPC). This ensures that private keys are never assembled in a single location, effectively eliminating single points of failure.'
  },
  {
    question: 'Does Moniolabs support customized liquidity routing?',
    answer: 'Yes. Our smart order routing engine can be configured to execute trades across multiple liquidity pools according to your specific latency, price impact, and compliance requirements.'
  },
  {
    question: 'Where are your global offices located?',
    answer: 'Moniolabs operates globally with headquarter operations in London, and strategic engineering hubs in Singapore and New York, providing round-the-clock follow-the-sun support.'
  },
  {
    question: 'Is there a minimum volume requirement for enterprise accounts?',
    answer: 'While our platform is built for institutional scale, we offer tiered access levels depending on the features required. Please contact our Enterprise Sales team to discuss the best package for your operational size.'
  }
];

export function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[#000000] font-['Nunito',sans-serif] text-white flex flex-col pt-[80px] lg:pt-[104px]">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pt-12 pb-24 lg:pt-20 lg:pb-[120px] relative z-10">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-[#00D661]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Hero Text Section */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-start lg:items-center text-left lg:text-center mb-16 lg:mb-24 relative z-10">
          <motion.h2 
            className="text-[#00D661] font-bold tracking-[2px] uppercase mb-4 text-[14px] lg:text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Support Center
          </motion.h2>
          <motion.h1 
            className="font-bold leading-[1.1] tracking-[-0.02em] text-white text-[40px] md:text-[48px] lg:text-[56px] max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How can we help you today?
          </motion.h1>
        </div>

        {/* Contact Methods Grid */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 mb-24 lg:mb-32">
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="flex flex-col p-8 lg:p-10 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[24px] hover:border-[#00D661]/60 hover:shadow-[0_0_30px_rgba(0,214,97,0.15)] transition-all duration-500 group relative overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            >
              {/* Inner Glow applied on hover */}
              <div className="absolute -right-16 -top-16 w-[120px] h-[120px] bg-[#00D661] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>

              <div className="w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-8 relative z-10 text-[#D7D7D7] group-hover:text-[#00D661] transition-colors duration-500 group-hover:border-[#00D661]/50">
                <method.icon size={24} strokeWidth={1.5} />
              </div>

              <h3 className="text-[24px] font-bold text-white mb-4 relative z-10 group-hover:text-[#00D661] transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-[#D7D7D7] text-[16px] leading-[1.6] relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-8 flex-1">
                {method.description}
              </p>

              <div className="mt-auto relative z-10 flex flex-col gap-4">
                <span className="text-white font-bold text-[18px]">{method.contact}</span>
                <button className="w-fit text-[#00D661] text-[14px] uppercase tracking-widest font-bold hover:text-white transition-colors cursor-pointer relative group/btn">
                  <span className="relative pb-1">
                    {method.action}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover/btn:w-full"></span>
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-center relative z-10">
          <motion.div 
            className="w-full max-w-[800px] flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start lg:items-center lg:text-center w-full mb-10">
              <h2 className="text-[#00D661] font-bold tracking-[2px] uppercase mb-4 text-[14px] lg:text-[16px]">FAQs</h2>
              <h3 className="font-bold text-white text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em]">
                Frequently Asked Questions
              </h3>
            </div>

            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`flex flex-col bg-white/[0.02] border transition-all duration-300 overflow-hidden ${
                  openFaq === index 
                    ? 'border-[#00D661]/40 shadow-[0_0_20px_rgba(0,214,97,0.05)] rounded-[24px]' 
                    : 'border-white/10 rounded-[16px] hover:border-white/20'
                }`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer outline-none border-none bg-transparent"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-[18px] lg:text-[20px] font-bold pr-8 transition-colors duration-300 ${openFaq === index ? 'text-[#00D661]' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openFaq === index ? 'bg-[#00D661]/10 text-[#00D661]' : 'bg-white/5 text-[#D7D7D7]'
                  }`}>
                    {openFaq === index ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-8 pt-2">
                        <p className="text-[#D7D7D7] text-[16px] lg:text-[18px] leading-[1.7] font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>

      </main>

      <GetStarted />
      <Footer />
    </div>
  );
}