"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaTicketAlt,
  FaUser,
  FaGlobe,
  FaCalendarCheck,
  FaArrowRight
} from "react-icons/fa";

const ticketPackages = [
  {
    title: "Residents – Single Day Pass",
    price: "KES 12,000",
    icon: FaUser,
    description: "Gives access to the main conference proceedings of that day and meals",
    badge: "Resident",
  },
  {
    title: "Non-Residents – Single Day Pass",
    price: "KES 25,000 (USD 195)",
    icon: FaGlobe,
    description: "Gives access to the main conference proceedings of that day and meals",
    badge: "Non-Resident",
  },
  {
    title: "Residents – Full Conference",
    price: "KES 36,000",
    icon: FaCalendarCheck,
    description: "Gives access to the main conference proceedings for the 2.5 days, meals and all side events",
    badge: "Resident",
  },
  {
    title: "Non-Residents – Full Conference",
    price: "KES 65,000 (USD 500)",
    icon: FaCalendarCheck,
    description: "Gives access to the main conference proceedings for the 2.5 days, meals and all side events",
    badge: "Non-Resident",
  },
];

export default function Tickets() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Individual Tickets Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              Tickets
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
              Individual Ticket Packages
            </h3>
            <p className="text-gray-600 text-lg mt-3">
              Join us for the 8th Annual Women and Transport Africa Conference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ticketPackages.map((ticket, index) => {
              const Icon = ticket.icon;
              const isResident = ticket.badge === "Resident";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f7f0f2] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#E1251B]/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E1251B] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-gray-800 text-sm">
                          {ticket.title}
                        </h4>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isResident 
                            ? "bg-green-100 text-green-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {ticket.badge}
                        </span>
                      </div>
                      <p className="text-[#E1251B] font-bold text-lg mt-1">
                        {ticket.price}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                        {ticket.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tickets CTA */}
          <div className="text-center mt-8">
            <Link
              href="/registration#tickets"
              className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
            >
              <FaTicketAlt className="w-4 h-4" />
              Purchase Tickets
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}