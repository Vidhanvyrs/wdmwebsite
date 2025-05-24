"use client";
import Image from "next/image";
import React, { useState } from "react";
import iphone from "@/public/iPhone 16 Pro.svg";
import { motion } from "framer-motion";
import Timer from "./Timer";
import Popup from "./Popup";
import Button from "./Button";
import { usePopup } from "@/context/PopupContext";

const Main = () => {
  const {
    isOpen,
    openPopup,
    closePopup,
    formData,
    handleFormChange,
    handleFormSubmit,
    handleRazorpayRedirect,
  } = usePopup();

  return (
    <div className="flex flex-col-reverse md:flex-row justify-around items-center mt-7 md:mt-0 lg:mt-0 gap-8 px-4 md:px-8 lg:px-12 py-12">
      {/* Text Content (Left) */}
      <motion.div
        className="flex flex-col max-w-2xl md:ml-8 lg:ml-12 xl:ml-16 text-center mt-15 md:mt-0 lg:mt-0 md:text-left items-center md:items-start"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        {/* <Timer /> */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Breathe the Air of Minimal Expenses through us.
        </h1>
        <p className="text-xl sm:text-2xl font-light text-white mt-4">
          Inhale Simplicity, Exhale Expenses.
        </p>
        <div className="space-y-3 mt-6">
          <p className="text-sm sm:text-base font-light text-gray-400">
            💸 Add your bank statement once, give SMS consent, and maintain your
            expenses on{" "}
            <span className="underline text-white">weekly/daily/monthly</span>{" "}
            basis.
          </p>
          <p className="text-sm sm:text-base font-light text-gray-400">
            🤝 Donate to us, so we can add the functionality of connecting your
            bank with wdm to analyze your expenses more dynamically in the next
            release.
          </p>
          <p className="text-sm sm:text-base font-light text-gray-400 italic">
            <span className="text-red-500">NOTE</span>:{" "}
            <span className="underline">
              Our product is currently for Indian users only.
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-10">
          <Button
            onClick={openPopup}
            bgColor={"bg-black"}
            hover={"hover:bg-transparent"}
            text={"Join the Wishlist 🤗"}
          />
          {isOpen && (
            <Popup
              formData={formData}
              onClose={closePopup}
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
            />
          )}
          <Button
            bgColor={"bg-transparent"}
            hover={"hover:bg-black"}
            text={"Support us Here 🙇‍♂️"}
            onClick={handleRazorpayRedirect}
          />
        </div>
      </motion.div>

      {/* Image (Right) */}
      <motion.div
        className="w-full max-w-lg xl:max-w-2xl scale-150 md:scale-120"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Image
          src={iphone}
          alt="iPhone showcasing wdm app"
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Main;
