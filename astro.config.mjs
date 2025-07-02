import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/general/informationbook/'},
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	  },
	integrations: [
		starlight({
			title: 'CAMP 2025',
			customCss:['./src/mathjax.css'],
			plugins: [starlightThemeRapide()],
			sidebar: [
				// {
				// 	label: 'Projects',
				// 	autogenerate: { directory: 'Projects' },
				// },

				{
					label: 'General',
					autogenerate: { directory: 'General' },
				},
				{
					label: 'Software Installation',
					autogenerate: { directory: 'SoftwareInstallation' },
				}

			],
		}),
	],
});

