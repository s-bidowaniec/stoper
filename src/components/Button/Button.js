import PropTypes from 'prop-types';
import styles from './Button.module.scss';
const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.handler}>
      {props.text}
    </button>
  );
};
export default Button;

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func
};
