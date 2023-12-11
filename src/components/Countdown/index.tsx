import React, { useState, useEffect } from 'react';
import './style.css'

interface CountdownProps {
  targetDate: string; // Date string in ISO format (e.g., "2023-12-31T23:59:59")
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isHeartBeating, setIsHeartBeating] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetTime = new Date(targetDate).getTime();
      const currentTime = new Date().getTime();
      const remaining = targetTime - currentTime;

      if (remaining > 0) {
        setTimeRemaining(remaining);
        // Start heartbeat effect in the last minute (adjust as needed)
        if (remaining <= 60000) {
          setIsHeartBeating(true);
        } else {
          setIsHeartBeating(false);
        }
      } else {
        clearInterval(interval);
        setTimeRemaining(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number): string => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  const timerClass = isHeartBeating ? 'countdown-timer heartbeat' : 'countdown-timer';

  return (
      <p className={timerClass}>{formatTime(timeRemaining)}</p>
  );
};

export default Countdown;
