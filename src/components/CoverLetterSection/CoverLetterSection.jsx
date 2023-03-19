import { useContext } from 'react';
import { Watch } from 'react-loader-spinner';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CoverLetterContext from '../../context/CoverLetterContext';
import Button from '../../uxElements/Button/Button';
import Section from '../Section/Section';
import styles from './CoverLetterSection.module.css';

const CoverLetterSection = () => {
  const coverLetter = useContext(CoverLetterContext);
  const { letter, isLoading } = coverLetter;

  const renderLetter = () => {
    if (isLoading) {
      return (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="rgb(34, 189, 241)"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      );
    }

    if (!!letter) {
      return (
        <>
          <p>{letter}</p>
          <CopyToClipboard text={letter}>
            <Button>Copy Letter</Button>
          </CopyToClipboard>
        </>
      );
    }

    return (
      <h2>
        The letter was not generated, fill out the form and click on the
        generate button
      </h2>
    );
  };

  // useEffect(() => {
  //   (async () => {
  //     const letter = await runPrompt({ ...letterDetails });
  //     setLetter(letter);
  //   })();
  // }, [letterDetails]);

  return (
    <Section sectionStyles={{ padding: 0 }} withContainer={true}>
      <div className={styles.coverLetterSection}>{renderLetter()}</div>
    </Section>
  );
};

export default CoverLetterSection;
