import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	optimizeDeps: {
		include: ['svelte-sonner'], // ✅ Important
	},
	ssr: {
		noExternal: ['svelte-sonner'], // ✅ Prevent SSR crash
	}
});
