import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [timerHour, setTimerHour] = useState("00");
  const [timerMinute, setTimerMinute] = useState("00");
  const [timerSecond, setTimerSecond] = useState("00");

  let interval = useRef();
  
  const startTimer = () => {  
    const countdown = new Date("August 9, 2020 00:00:00").getTime();
    interval = setInterval(() => {
      
      const currentTime = new Date().getTime();
      const distance = countdown - currentTime;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerHour(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <p>
        남은 수업 시간 : {timerHour}:{timerMinute}:{timerSecond}
      </p>
    </>
  );
};
export default Timer;
