import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelteSVG from 'vite-plugin-svelte-svg'; // import the plugin

export default defineConfig({
  plugins: [sveltekit(), svelteSVG()],
  define: {
    'process.env': {},
  },
});
