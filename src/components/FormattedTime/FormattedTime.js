import PropTypes from 'prop-types';

const FormattedTime = ({ time }) => {
  const nulls = (value) => {
    return ('00' + String(value)).slice(-2);
  };
  const formatTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    milliseconds = String(milliseconds % 1000).slice(0, 2);
    seconds = nulls(seconds % 60);
    minutes = nulls(minutes % 60);
    hours = nulls(hours % 24);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return <div>{formatTime(time)}</div>;
};

FormattedTime.propTypes = {
  time: PropTypes.number
};

export default FormattedTime;
