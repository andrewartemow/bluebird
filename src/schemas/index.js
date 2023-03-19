import * as yup from 'yup';

export const formSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  job: yup.string().required('Required'),
  skills: yup.string().required('Required'),
  email: yup.string().email('please enter a valid email').required('Required'),
  phone: yup.number().positive().integer().required('Required'),
});
