"use client";
import { usePopup } from "@/context/PopupContext";
import { motion } from "framer-motion";
import free from "@/public/free-gratis.jpg";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Pricing = () => {
  const { handleRazorpayRedirect } = usePopup();
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
      <Image
        src={free}
        alt="about us"
        className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] h-auto md:-ml-20 mt-3 mb-6 sm:mb-8 md:mb-10 rounded-lg md:rounded-2xl"
        priority
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full md:w-3/4 font-bold">
        We are Free for now, <span className="text-red-500">but</span> we are
        looking for your <span className="text-green-500">support</span>.
      </h1>
      <p className="text-base sm:text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 mt-4 text-gray-400">
        In order to cover the API costs and develop the bank connection feature
        available to you, hence smoothening the whole process, we require your
        generous Support.
      </p>
      <div className="w-full md:w-auto flex flex-wrap gap-4 mt-6 md:mt-10 justify-center">
        <span className="max-w-xs break-words text-center">
          Add Bank Statement Once & Give us Consent
        </span>
        <span className="max-w-xs break-words text-center">
          See Daily, Weekly & Monthly Spend
        </span>
        <span className="max-w-xs break-words text-center">
          No Ads, No Clutter, No Categories, No Noise
        </span>
        <span className="max-w-xs break-words text-center">
          Because you deserve control — without the chaos.
        </span>
      </div>

      <div className="flex flex-row gap-4 mt-6 md:mt-10 w-full md:w-auto justify-center">
        <Button
          bgColor={"bg-transparent"}
          hover={"hover:bg-black"}
          text={"Support us Here 🙇‍♂️"}
          onClick={handleRazorpayRedirect}
        />
      </div>
    </motion.div>
  );
};

export default Pricing;
