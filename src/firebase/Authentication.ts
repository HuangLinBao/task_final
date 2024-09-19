import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';


const loginUser = async (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

// Function to log out
const logoutUser = async () => {
	return auth.signOut();
};

// Function to register a new user
const registerUser = async (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password);
};


export const useLogin = () => {
	return useMutation({
		mutationFn: async (formData: { email: string; password: string }) => {
			const { email, password } = formData;
			return loginUser(email, password);
		}
	});
};

export const useLogout = () => {
	return useMutation({
		mutationFn: () => logoutUser(),
		onSuccess: () => {
			// Handle success
		},
		onError: () => {
			// Handle error
		},
		// Other options if needed
	});
};

export const useRegister = () => {
	return useMutation({
		mutationFn: async (formData: { email: string; password: string }) => {
			const { email, password } = formData;
			registerUser(email, password);
		}
	});
};
