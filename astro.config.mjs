import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CAMP 2024',
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Software Installation',
					autogenerate: { directory: 'SoftwareInstallation' },
				},
			],
		}),
	],
});

