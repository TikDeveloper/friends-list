import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export type EditFriendFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  twitter: string;
};

export const editFiendFormSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required'),
  twitter: Yup.string()
    .matches(
      /^@.{4,}$/,
      'Text field must start with "@" and have 4 characters after it'
    )
    .required('Twitter is required'),
});
