import Header from '../../components/Header/Header';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <HeaderSection />
      <ReviewsSection />
      <DescriptionSection />
    </div>
  );
};

export default MainPage;
