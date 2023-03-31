import Button from '../../uxElements/Button/Button';
import Logo from '../../uxElements/Logo/Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <Logo />
      <div>
        <Button isLink={true} linkPath="dashboard">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
