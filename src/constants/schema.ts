import * as Yup from 'yup';

export const CONTACT_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email'),  
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});