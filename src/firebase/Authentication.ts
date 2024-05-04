import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
const getCurrentUser = async () => {
	return new Promise((resolve) => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			unsubscribe();
			resolve(user);
		});
	});
};
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

export const useCurrentUser = () => {
	return useQuery({ queryKey: ['currentUser'], queryFn: getCurrentUser });
};

export const useLogin = () => {
	return useMutation({
		mutationFn: async (formData: { email: string; password: string }) => {
			const { email, password } = formData;
			return loginUser(email, password);
		},
		onSuccess: () => {
			// Handle success
		},
		onError: () => {
			// Handle error
		},
		// Other options if needed
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
			return registerUser(email, password);
		},
		onSuccess: () => {
			// Handle success
		},
		onError: () => {
			// Handle error
		},
		// Other options if needed
	});
};
