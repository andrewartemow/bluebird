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
          <label className={styles.errorText}>{errors.firstName}</label>
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
          <label className={styles.errorText}>{errors.lastName}</label>
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
          <label className={styles.errorText}>{errors.job}</label>
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
          <label className={styles.errorText}>{errors.skills}</label>
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
          <label className={styles.errorText}>{errors.email}</label>
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
          <label className={styles.errorText}>{errors.phone}</label>
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
        <Button
          type="submit"
          disabled={isLoading}
          style={{ display: 'block', margin: '8px auto' }}
        >
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
