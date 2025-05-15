"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import wdm from "@/public/wd.png";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "InShort" },
  { path: "/about", label: "Who needs us?" },
  { path: "/pricing", label: "Pricing" },
  { path: "/consent", label: "Your Consent" },
];

export default function Header() {
  const pathname = usePathname();
  const phoneNumber = "7725905353";
  const countryCode = "91";
  const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}`;
  const message = "Hello! I'm interested in wdm...";

  return (
    <header className="flex flex-col md:flex-row items-center justify-around gap-4 p-4 md:p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src={wdm}
            alt="wdm logo"
            className="w-12 h-12 rounded-xl hover:scale-105 transition-transform"
            priority
          />
        </Link>
      </motion.div>

      <motion.nav
        className="w-full md:w-auto bg-gray-800/90 dark:bg-gray-800 text-white rounded-3xl border-2 md:border border-dashed border-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <ul className="flex flex-wrap justify-center md:flex-nowrap md:gap-4 lg:gap-6 p-1 md:px-3 md:py-2 text-sm font-bold">
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              className="p-1 md:px-2 md:py-1"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            >
              <Link
                href={item.path}
                className={`px-2 py-1 rounded-lg transition-colors ${
                  pathname === item.path
                    ? "text-cyan-300 bg-gray-700/50"
                    : "hover:text-cyan-300 hover:bg-gray-700/50"
                }`}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <Link
          href={`${whatsappUrl}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full cursor-pointer md:w-auto bg-black font-medium rounded-3xl text-white px-6 py-2 border-2 border-transparent hover:border-dashed hover:border-white transition-all hover:scale-[1.02]">
            Connect with us 💬
          </button>
        </Link>
      </motion.div>
    </header>
  );
}
