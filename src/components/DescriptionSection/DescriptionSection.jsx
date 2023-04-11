import { RiBriefcase4Fill } from '@react-icons/all-files/ri/RiBriefcase4Fill';
import { RiSearch2Line } from '@react-icons/all-files/ri/RiSearch2Line';
import { RiEmotionFill } from '@react-icons/all-files/ri/RiEmotionFill';

import Button from '../../uxElements/Button/Button';
import Section from '../Section/Section';

import styles from './DescriptionSection.module.css';

const DescriptionSection = () => {
  const iconStyle = {
    color: 'rgb(34, 189, 241)',
    fontSize: '30px',
    marginRight: '20px',
  };

  const liItems = [
    {
      icon: <RiEmotionFill style={iconStyle} />,
      text: 'It gives you an opportunity to be more personal. Specifically, it allows you to show your passion, your motivation, and aspects of your personality relevant to the position or company. You simply can’t do this with a resume.',
      id: 1,
    },
    {
      icon: <RiBriefcase4Fill style={iconStyle} />,
      text: 'A cover letter can seriously boost your chances of getting the job. When applying for a job, there are probably hundreds of applicants with the same qualifications and experience as you. Use this as a chance to make your CV stand out from the crowd.',
      id: 2,
    },
    {
      icon: <RiSearch2Line style={iconStyle} />,
      text: 'A cover letter shows that you have taken the time to research the company to make sure that you’d be a good fit to work there. It can include keywords from their job listing to show that your values align with that of the company’s.',
      id: 3,
    },
  ];

  return (
    <Section sectionStyles={{ padding: '20px' }} withContainer={true}>
      <div className={styles.descriptionSection}>
        <h2>What Benefits of Cover Letter?</h2>
        <ul>
          {liItems.map((liItem) => (
            <li key={liItem.id}>
              <div>{liItem.icon}</div> <p>{liItem.text}</p>
            </li>
          ))}
        </ul>
        <Button isLink={true} linkPath="dashboard">
          Try it now
        </Button>
      </div>
    </Section>
  );
};

export default DescriptionSection;
