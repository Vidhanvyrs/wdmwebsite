"use client";
import { usePopup } from "@/context/PopupContext";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Consent = () => {
  const {
    isOpen,
    openPopup,
    closePopup,
    formData,
    handleFormChange,
    handleFormSubmit,
  } = usePopup();
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12 md:m-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full md:w-3/4 font-bold">
        Your Data's Safety is Our Topmost Priority 🤝.
      </h1>
      <p className="text-base sm:text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 mt-4 text-gray-200">
        Your SMS, your data — with your permission, we turn it into peace of
        mind.
      </p>
      <p className="text-sm sm:text-base md:text-sm w-full md:w-3/4 lg:w-1/2 mt-4 text-gray-400">
        With your SMS consent, we’ll do the heavy lifting — securely analyzing
        and updating your expense data on the app, so you can focus on what
        truly matters which is Savings and Budgeting.
      </p>
      <Image
        loading="lazy"
        src={`https://www.fiestavillage.com/wp-content/uploads/2019/07/giphy-5.gif`}
        width={500}
        height={500}
        alt="gif"
        className="mt-10 rounded-xl"
      />
      <p className="text-sm sm:text-base md:text-sm w-full md:w-3/4 lg:w-1/2 mt-10 text-gray-400">
        <span className="text-red-500">PS</span>: For more info you can go
        through our Privacy Policy and Terms & Conditions Page else connect with
        us for your queries.
      </p>
    </motion.div>
  );
};

export default Consent;
