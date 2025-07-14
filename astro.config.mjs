import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
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
			sidebar: [


				{
					label: 'General',
					autogenerate: { directory: 'General' },
				},
				{
					label: 'Software Installation',
					autogenerate: { directory: 'SoftwareInstallation' },
				},
				{
				label: 'Projects',
				items: [
					'projects/project-guidelines',
					{
					label: 'Week 1',
					items: [
						'projects/w1projectgroups',
						'projects/w1projectideas',

					],
					},
										{
					label: 'Week 2',
					items: [
						'projects/w2projectgroups',
						'projects/w2projectideas',

					],
					},
				],
				},

			],
		}),
	],
});

