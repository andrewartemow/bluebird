import SideBar from '../../components/SideBar/SideBar';
import CoverLetterSection from '../../components/CoverLetterSection/CoverLetterSection';

import CoverLetterContext from '../../context/CoverLetterContext';
import { useState } from 'react';

import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const [letter, setLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.dashboardPage}>
      <CoverLetterContext.Provider
        value={{
          letter,
          isLoading,
          setLetter,
          setIsLoading,
        }}
      >
        <SideBar />
        <CoverLetterSection />
      </CoverLetterContext.Provider>
    </div>
  );
};

export default DashboardPage;
