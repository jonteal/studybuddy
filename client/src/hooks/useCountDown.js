import { useState, useEffect } from "react";

const useCountdown = ({
  timeInMilliSeconds,
  countDownStarted,
  countDownTime,
}) => {
  const [countDownInMilliSeconds, setCountDown] = useState(
    countDownTime - new Date().getTime()
  );

  useEffect(() => {
    let interval;
    if (timeInMilliSeconds > 0) {
      interval = setInterval(() => {
        {
          setCountDown(countDownTime - new Date().getTime());
        }
      }, 1000);
    } else if (!countDownStarted) {
      clearInterval(interval);
      setCountDown(0);
    }
    return () => clearInterval(interval);
  }, [countDownTime, timeInMilliSeconds, countDownStarted]);

  // reset countDownInMilliSeconds to zero
  // if countdown stopped
  useEffect(() => {
    if (!countDownStarted) {
      setCountDown(0);
      return;
    }
  }, [countDownStarted]);

  return getReturnValues(countDownInMilliSeconds);
};

const getReturnValues = (countDown) => {
  // calculate the time left
  const minutes = Math.floor(countDown / (60 * 1000));
  const seconds = parseInt(((countDown % (60 * 1000)) / 1000).toFixed(0));
  return [minutes, seconds];
};

export { useCountdown };
