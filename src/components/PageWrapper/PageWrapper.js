import PropTypes from 'prop-types';
import styles from './PageWrapper.module.scss';
const PageWrapper = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node
};
