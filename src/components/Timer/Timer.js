import { useEffect, useState } from 'react';
import settings from '../../settings';
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';
const Timer = () => {
  const [time, setTime] = useState(0);
  const reset = () => {
    setTime(0);
  };

  const [timer, setTimer] = useState(0);
  const [timerFlag, setTimerFlag] = useState(false);
  const start = () => {
    if (!timerFlag) {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + settings.timeInterval);
        }, settings.timeInterval)
      );
      setTimerFlag(true);
    }
  };
  const stop = () => {
    clearInterval(timer);
    setTimerFlag(false);
  };
  useEffect(() => {
    return () => {
      if (timer) stop();
    };
  }, []);

  return (
    <div>
      <FormattedTime time={time} />
      <Button text="Start" handler={start}></Button>
      <Button text="Stop" handler={stop}></Button>
      <Button text="Reset" handler={reset}></Button>
    </div>
  );
};

export default Timer;
