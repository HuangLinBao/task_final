import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

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
	return useQuery('currentUser', getCurrentUser);
};

export const useLogin = () => {
	return useMutation(loginUser);
};

export const useLogout = () => {
	return useMutation(logoutUser);
};

export const useRegister = () => {
	return useMutation(registerUser);
};
