import styles from './Review.module.css';

const Review = ({ imgSrc, name, job, text }) => {
  return (
    <div className={styles.review}>
      <div>
        <img src={imgSrc} alt=":(" />
      </div>
      <h3>{name}</h3>
      <h4>{job}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Review;
