import PropTypes from 'prop-types';

const Button = (props) => {
  return <button onClick={props.handler}>{props.text}</button>;
};
export default Button;

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func
};
