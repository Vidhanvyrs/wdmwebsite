"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePopup } from "@/context/PopupContext";
import { motion } from "framer-motion";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import Image from "next/image";
import Popup from "./Popup";

const img = [img1, img2];
const About = () => {
  const {
    isOpen,
    openPopup,
    closePopup,
    formData,
    handleFormChange,
    handleFormSubmit,
    handleRazorpayRedirect,
  } = usePopup();

  const [currimg, setCurrimg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrimg((prev) => (prev + 1) % img.length);
    }, 3000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4 py-12 md:m-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full md:w-3/4 font-bold">
        Serving those folks who do not want to stress out about their money and
        excess expenses
      </h1>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-3/4 text-gray-300 font-bold mt-4">
        Because budgeting shouldn't feel like a second job!
      </h3>
      <p className="text-base sm:text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 mt-4 text-gray-400">
        Just want to track how much you're spending in a more minimal fashion
        then you are at the right place
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-10 w-full md:w-auto">
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
      <Image
        src={img[currimg]}
        alt="about us"
        className="w-full md:w-[90%] lg:w-[80%] xl:w-[60%] h-auto mt-8 md:mt-12 rounded-lg md:rounded-2xl"
        priority
      />
    </motion.div>
  );
};

export default About;
