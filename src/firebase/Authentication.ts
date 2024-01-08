import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const createAccount = (auth: Auth, email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const { user } = userCredential;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};

export const signInWithCredentials = (auth: Auth, email: string, password: string) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const { user } = userCredential;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};
