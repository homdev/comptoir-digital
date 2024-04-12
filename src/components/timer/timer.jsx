import React, { useState, useEffect } from 'react';

// Helper function to calculate the time left until the target date
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heurs: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

// Timer component
const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!timeLeft || timeLeft <= 0) {
    return null;
  }

  return (
    <div className="flex justify-between items-center p-4 bg-flashWhite dark:bg-metalBlack bg-opacity-75 rounded-xl text-gray">
      
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center justify-center">
          <span className="font-bold text-2xl sm:text-3xl">{timeLeft[interval]}</span>
          <span className="uppercase text-xs sm:text-sm">{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
