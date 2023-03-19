import { createContext } from 'react';

const CoverLetterContext = createContext({
  letter: '',
  isLoading: false,
  setLetter: () => {},
  setIsLoading: () => {},
});

export default CoverLetterContext;
