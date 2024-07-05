import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CAMP 2024',
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

