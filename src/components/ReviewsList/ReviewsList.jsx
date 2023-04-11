import Slider from 'react-slick';

import Review from '../Review/Review';

import reviews from '../../data/reviews';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewsList.css';
import styles from './ReviewsList.module.css';

const ReviewsList = () => {
  const defaultSettings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  const settings = {
    ...defaultSettings,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          ...defaultSettings,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          ...defaultSettings,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.reviewsList}>
      <Slider {...settings}>
        {reviews.map((review) => (
          <Review {...review} key={review.id} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsList;
