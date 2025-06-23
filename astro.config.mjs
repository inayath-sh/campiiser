import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'
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
			plugins: [starlightThemeFlexoki()],
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				// {
				// 	label: 'Projects',
				// 	autogenerate: { directory: 'Projects' },
				// },

				{
					label: 'Important Links',
					autogenerate: { directory: 'ImportantLinks' },
				},
				{
					label: 'Software Installation',
					autogenerate: { directory: 'SoftwareInstallation' },
				}

			],
		}),
	],
});

