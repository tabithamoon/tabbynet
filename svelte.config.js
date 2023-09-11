import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  adapter: adapter({
    routes: {
        include: ['/*'],
        exclude: ['<all>']
    }
  }),
  preprocess: vitePreprocess()
};
