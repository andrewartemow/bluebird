import { Typewriter } from 'react-simple-typewriter';
import Button from '../../uxElements/Button/Button';
import Section from '../Section/Section';
import styles from './HeaderSection.module.css';

const HeaderSection = () => {
  return (
    <Section sectionStyles={{ padding: '0 20px' }} withContainer={true}>
      <div className={styles.headerSection}>
        <h1>Create your perfect cover letter</h1>
        <span>
          we will help you get your job{' '}
          <Typewriter
            words={[
              'as a Developer',
              'as a Designer',
              'as a Manager',
              'as a Copywriter',
              'where you want.',
            ]}
            typeSpeed={80}
            deleteSpeed={50}
            loop={false}
            cursor={true}
          />
        </span>
        <Button isLink={true} linkPath="dashboard">
          Create your Cover Letter
        </Button>
      </div>
    </Section>
  );
};

export default HeaderSection;
