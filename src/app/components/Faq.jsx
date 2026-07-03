// components/FAQ.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaSearch, 
  FaEnvelope,
  FaQuestionCircle 
} from "react-icons/fa";

const faqs = [
  {
    question: "What is the Women and Transport Africa (WTA) Conference?",
    answer: "The WTA Conference is an annual event that brings together professionals, policymakers, academics, and advocates to discuss and promote gender equality and innovation in Africa's transport sector."
  },
  {
    question: "What are the main themes of the conference?",
    answer: "Key themes include women's leadership in transport, creating safe and inclusive public spaces, sustainable urban mobility, technology and innovation, and policy development for equitable transport systems."
  },
  {
    question: "Who should attend the WTA Conference?",
    answer: "The conference is ideal for transport professionals, urban planners, policymakers, researchers, students, and anyone interested in advancing gender equality in the African transport sector."
  },
  {
    question: "How can I register for the conference?",
    answer: "Registration can be completed online through our official website. Visit the Registration page for step-by-step instructions and payment options."
  },
  {
    question: "Are there early bird discounts available?",
    answer: "Yes, we offer early bird discounts for registrations made before the conference date. Check our Registration page for current rates and deadlines."
  },
  {
    question: "Who will be speaking at the conference?",
    answer: "Our speakers include renowned subject matter experts, industry leaders, and influential policymakers in the transport sector. For detailed profiles of our speakers, please visit our Speakers page."
  },
  {
    question: "What types of sessions will be available?",
    answer: "The conference features keynote speeches, panel discussions, interactive workshops, and networking events. Click here to download a detailed program of the conference on our website."
  },
  {
    question: "Where will the conference be held?",
    answer: "The conference will take place at Nairobi, Kenya. For more details about the venue and accommodation options, please visit our Program page."
  },
  {
    question: "Will there be networking opportunities at the conference?",
    answer: "Yes, the conference includes dedicated networking sessions, social events, and an interactive cocktail session to connect with other attendees."
  },
  {
    question: "Is there an opportunity to showcase products or services at the conference?",
    answer: "We offer exhibition spaces and sponsorship opportunities for organizations wishing to showcase their products or services. Please visit our Sponsorship Package page for more information."
  }
];

// Accordion Item Component
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      className={`border-b border-gray-100 last:border-b-0 transition-colors duration-300 ${
        isOpen ? "bg-[#f7f0f2]" : "hover:bg-gray-50"
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 md:py-5 px-4 md:px-6 text-left group"
      >
        <div className="flex items-center gap-3 md:gap-4 pr-4">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${
            isOpen 
              ? "bg-[#E1251B] text-white" 
              : "bg-gray-100 text-gray-400 group-hover:bg-[#E1251B]/10 group-hover:text-[#E1251B]"
          }`}>
            {index + 1}
          </span>
          <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
            isOpen ? "text-[#E1251B]" : "text-gray-800 group-hover:text-[#E1251B]"
          }`}>
            {question}
          </span>
        </div>
        <span className={`flex-shrink-0 ml-4 transition-all duration-300 ${
          isOpen ? "text-[#E1251B] rotate-180" : "text-gray-400 group-hover:text-[#E1251B]"
        }`}>
          <FaChevronDown className="w-4 h-4" />
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 md:px-6 pb-4 md:pb-5"
        >
          <div className="pl-9 md:pl-10">
            <div className="w-12 h-0.5 bg-[#E1251B]/30 rounded-full mb-3"></div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f7f0f2] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            <FaQuestionCircle className="w-3 h-3" />
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Everything you need to know about the Women and Transport Africa Conference
          </p>
        </motion.div>


        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>

     
      </div>
    </section>
  );
}