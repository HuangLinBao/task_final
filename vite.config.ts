/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./setup/setup.ts'],
		// you might want to disable it, if you don't have tests that rely on CSS
		// since parsing CSS is slow
		css: true,
	},
});
