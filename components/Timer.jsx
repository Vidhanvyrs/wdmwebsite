"use client";
import { useState, useEffect } from "react";

const Timer = () => {
  // 15 days in milliseconds
  const FIFTEEN_DAYS = 15 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(FIFTEEN_DAYS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Get the end time from localStorage or set a new one
    let endTime;
    const savedEndTime =
      typeof window !== "undefined"
        ? localStorage.getItem("timerEndTime")
        : null;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
      // If the saved end time is in the past, reset it
      if (Date.now() > endTime) {
        endTime = Date.now() + FIFTEEN_DAYS;
        localStorage.setItem("timerEndTime", endTime.toString());
      }
    } else {
      endTime = Date.now() + FIFTEEN_DAYS;
      localStorage.setItem("timerEndTime", endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(difference);
      }
    };

    // Update immediately
    updateTimer();

    // Then update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [FIFTEEN_DAYS]);

  // Format the time left into days, hours, minutes, seconds
  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  if (!isClient) {
    return <div className="text-white">Loading timer...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-bold mb-4 text-white">Launching in...</h2>
      <div className="flex gap-2 sm:gap-4">
        <TimeBox value={days} label="Days" />
        <TimeBox value={hours} label="Hours" />
        <TimeBox value={minutes} label="Minutes" />
        <TimeBox value={seconds} label="Seconds" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black text-white border border-dashed rounded-lg p-3 sm:p-4 w-16 sm:w-20 text-center shadow-lg">
        <span className="text-xl sm:text-2xl font-bold">{value}</span>
      </div>
      <span className="text-xs sm:text-sm mt-2 text-white">{label}</span>
    </div>
  );
};

export default Timer;
