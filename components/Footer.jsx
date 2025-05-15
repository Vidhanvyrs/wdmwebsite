"use client";
import Image from "next/image";
import wdm from "@/public/wd.png";
import { motion } from "framer-motion";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full  text-white py-6 px-4 md:px-8 lg:px-12"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left section - Logo + Copyright */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src={wdm}
              alt="wdm logo"
              className="w-10 h-10 rounded-xl transition-transform"
            />
          </div>
          <span className="text-xs text-gray-300">
            © {currentYear} wdm, All rights reserved
          </span>
        </div>

        {/* Right section - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <a
            href="https://vanilla-nut-5bb.notion.site/Privacy-Policy-1f42898f76bd80ab9691eac45470dd1c?pvs=4"
            target="_blank"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="www.linkedin.com/in/vidhan-solanki-dotlasher001"
            className="text-sm text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://vanilla-nut-5bb.notion.site/Terms-Conditions-1f42898f76bd80c288e7d74f3deac3a2?pvs=4"
            target="_blank"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Mobile bottom spacer */}
      <div className="h-8 md:hidden"></div>
    </motion.footer>
  );
};

export default Footer;
