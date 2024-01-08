import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	firstName: yup.string().required('this is a required field'),
	lastName: yup.string().required('this is a required field'),
	email: yup.string().email('email is invalid').required('this is a required field'),
	password: yup.string().min(4).max(30).required('this is a required field'),
	repeatPassword: yup.string().min(4).max(30).required('this is a required field'),
});

export const loginSchema = yup.object().shape({
	email: yup.string().email('email is invalid').required('this is a required field'),
	password: yup.string().min(4).max(30).required('this is a required field'),
});

export const defaultRegister = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	repeatPassword: '',
};
export const defaultLogin = {
	email: '',
	password: '',
};
