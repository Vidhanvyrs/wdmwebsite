"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleRazorpayRedirect = () => {
    window.open("https://razorpay.me/@dotlasher", "_blank");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/wishlistjoinees`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_BEARER_TOKEN}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Error inserting data:", error);
        toast.error("Failed to join the list");
        return;
      }

      toast.success("Successfully joined the list");
      setIsOpen(false);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Network or fetch error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        openPopup,
        closePopup,
        formData,
        setFormData,
        handleFormChange,
        handleFormSubmit,
        handleRazorpayRedirect,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
export const usePopup = () => useContext(PopupContext);
