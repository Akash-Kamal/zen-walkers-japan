import { useState } from "react";
import { Phone, Mail, Globe } from "lucide-react";
import ContactModal from "./ContactModal";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4a1a2e] to-[#2a0f1f] text-white relative overflow-hidden">
      {/* Japan map silhouette on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 250" fill="currentColor" className="text-primary">
          <path d="M 150 50 Q 160 60 160 80 Q 155 100 145 110 Q 135 105 130 95 Q 125 80 135 60 Z M 140 120 Q 145 130 140 145 Q 130 150 125 140 Z M 100 100 Q 110 110 105 130 Q 95 135 90 125 Q 85 110 95 100 Z M 80 70 Q 90 75 85 95 Q 75 100 70 85 Z M 100 30 Q 110 35 105 50 Q 95 55 90 40 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1">
            {/* Logo */}
            <div className="mb-8">
              {/* <img
                src="/Zen-logo.png"
                alt="Zen Walkers Japan"
                className="h-20 w-auto"
              /> */}
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Contact Us
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-200 mb-12 font-light">
              We're here to help you plan your perfect journey to Japan.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-primary flex-shrink-0" />
                <span className="text-lg">+91 96300 69222</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-primary flex-shrink-0" />
                <span className="text-lg">info@zenwalkersjp.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Globe size={24} className="text-primary flex-shrink-0" />
                <span className="text-lg">www.zenwalkersjp.com</span>
              </div>
            </div>
          </div>

          {/* Right side - Send Message button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 rounded-full bg-primary text-white text-xl font-semibold hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
