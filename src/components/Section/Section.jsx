import Container from '../Container/Container';
import styles from './Section.module.css';

const Section = ({ children, sectionStyles, withContainer = false }) => {
  return (
    <section className={styles.section} style={sectionStyles}>
      {withContainer ? <Container>{children}</Container> : children}
    </section>
  );
};

export default Section;
