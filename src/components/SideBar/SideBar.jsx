import { useContext } from 'react';
import { useFormik } from 'formik';

import { formSchema } from '../../schemas';
import runPrompt from '../../openai';

import CoverLetterContext from '../../context/CoverLetterContext';

import Logo from '../../uxElements/Logo/Logo';
import Button from '../../uxElements/Button/Button';

import styles from './SideBar.module.css';

const SideBar = () => {
  const coverLetter = useContext(CoverLetterContext);
  const { setLetter, setIsLoading, isLoading } = coverLetter;

  const onSubmitHandler = async () => {
    setLetter('');
    setIsLoading(true);
    await (async () => {
      const currentLetter = await runPrompt({
        firstName: values.firstName,
        lastName: values.lastName,
        job: values.job,
        skills: values.skills,
        email: values.email,
        phone: values.phone,
      });
      setLetter(currentLetter);
    })();
    setIsLoading(false);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        job: '',
        skills: '',
        email: '',
        phone: '',
      },
      validationSchema: formSchema,
      onSubmit: onSubmitHandler,
    });

  // const { inputName, inputLastName, inputJob, inputEmail, inputPhone } = inputs;

  // const onChangeHandler = (event, property) => {
  //   setInputs({
  //     ...inputs,
  //     [property]: { ...property, text: event.target.value },
  //   });
  // };

  return (
    <div className={styles.sidebar}>
      <Logo />
      <form onSubmit={handleSubmit}>
        {errors.firstName && touched.firstName && (
          <p className={styles.errorText}>{errors.firstName}</p>
        )}
        <input
          placeholder="FirstName"
          id="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.firstName && touched.firstName ? styles.inputError : ''
          }
        />
        {errors.lastName && touched.lastName && (
          <p className={styles.errorText}>{errors.lastName}</p>
        )}
        <input
          placeholder="LastName"
          id="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.lastName && touched.lastName ? styles.inputError : ''
          }
        />
        {errors.job && touched.job && (
          <p className={styles.errorText}>{errors.job}</p>
        )}
        <input
          placeholder="Job"
          id="job"
          type="text"
          value={values.job}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.job && touched.job ? styles.inputError : ''}
        />
        {errors.skills && touched.skills && (
          <p className={styles.errorText}>{errors.skills}</p>
        )}
        <input
          placeholder="HTML, CSS, Javascript...."
          id="skills"
          type="text"
          value={values.skills}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.skills && touched.skills ? styles.inputError : ''}
        />
        {errors.email && touched.email && (
          <p className={styles.errorText}>{errors.email}</p>
        )}
        <input
          placeholder="example@gmail.com"
          id="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? styles.inputError : ''}
        />
        {errors.phone && touched.phone && (
          <p className={styles.errorText}>{errors.phone}</p>
        )}
        <input
          placeholder="your phone number"
          id="phone"
          type="number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.phone && touched.phone ? styles.inputError : ''}
        />
        <Button type="submit" disabled={isLoading}>
          Generate Cover Letter
        </Button>
        <Button isLink={true} linkPath="/" className={styles.backBtn}>
          Back to main page
        </Button>
      </form>
    </div>
  );
};

export default SideBar;
