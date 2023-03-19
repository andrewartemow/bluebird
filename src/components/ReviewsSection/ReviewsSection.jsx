import ReviewsList from '../ReviewsList/ReviewsList';
import Section from '../Section/Section';
import styles from './ReviewsSection.module.css';

const ReviewsSection = () => {
  return (
    <Section
      sectionStyles={{
        backgroundColor: 'rgb(29 29 32)',
        width: '100%',
        color: '#fff',
        padding: '50px 0',
      }}
    >
      <div className={styles.reviewsSection}>
        <h2>Reviews</h2>
        <ReviewsList />
      </div>
    </Section>
  );
};

export default ReviewsSection;
