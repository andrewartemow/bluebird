import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({
  children,
  type,
  disabled,
  className,
  isLink,
  linkPath,
  style,
}) => {
  return isLink ? (
    <Link to={linkPath}>
      <button
        style={disabled ? { opacity: 0.5 } : {}}
        className={`${styles.button} ${className ? className : ''}`}
        type={type}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      style={disabled ? { ...style, opacity: 0.5 } : style}
      className={`${styles.button} ${className ? className : ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
