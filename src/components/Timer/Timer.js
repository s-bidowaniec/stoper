import { useEffect, useState } from 'react';
import settings from '../../settings';
import styles from './Timer.module.scss';
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';
const Timer = () => {
  // Initial states
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerFlag, setTimerFlag] = useState(false); // prevent dual start

  // Functions
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
  const reset = () => {
    setTime(0);
  };
  useEffect(() => {
    return () => {
      if (timer) stop();
    };
  }, []);

  return (
    <div className={styles.timer}>
      <FormattedTime time={time} />
      <div>
        <Button text="Start" handler={start}></Button>
        <Button text="Stop" handler={stop}></Button>
        <Button text="Reset" handler={reset}></Button>
      </div>
    </div>
  );
};

export default Timer;
