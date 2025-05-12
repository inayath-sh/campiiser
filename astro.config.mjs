import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	  },
	integrations: [
		starlight({
			title: 'CAMP 2025',
			customCss:['./src/mathjax.css'],
			plugins: [starlightThemeRapide()],
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Projects',
					autogenerate: { directory: 'Projects' },
				},
				{
					label: 'Software Installation',
					autogenerate: { directory: 'SoftwareInstallation' },
				},

				{
					label: 'Important Links',
					autogenerate: { directory: 'ImportantLinks' },
				},
			],
		}),
	],
});

