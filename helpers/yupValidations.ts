import * as yup from 'yup';

const required = 'The field is required';

export const checkoutYup = yup.object().shape({
  address: yup.string().required(required).min(5),
  city: yup.string().min(3).required(required),
  country: yup.string().required(required),
  zipCode: yup.string().required(required).max(5),
  phoneNumber: yup.string().required(required).min(6),
});
