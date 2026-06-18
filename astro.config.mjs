
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { unified } from '@astrojs/markdown-remark';
import starlightThemeNova from 'starlight-theme-nova';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: unified({
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  }),

  integrations: [
    starlight({
      title: 'CAMP 2026',
      customCss: [
        './src/mathjax.css',
        './src/styles/global.css', // Tailwind entry CSS
      ],

      plugins: [
        starlightThemeNova({
          nav: [
            { label: 'Information Booklet', href: '/general/informationbook' },
            { label: 'Schedule', href: 'https://camp.iiserpune.ac.in/schedule' },
          ],
        }),
      ],

      sidebar: [
        {
          label: 'General',
          items: [{ autogenerate: { directory: 'general' } }],
        },
        {
          label: 'Software Installation',
          items: [{ autogenerate: { directory: 'softwareinstallation' } }],
        },
      ],
    }),
  ],
});

// import { defineConfig } from 'astro/config';
// import starlight from '@astrojs/starlight';
// import remarkGfm from "remark-gfm";
// import rehypeSlug from "rehype-slug";
// import { unified } from '@astrojs/markdown-remark';
// import starlightThemeNova from 'starlight-theme-nova';
// import tailwindcss from '@tailwindcss/vite'

// // https://astro.build/config
// export default defineConfig({
//   markdown: unified({
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypeSlug],
//   }),
// 	integrations: [
// 		starlight({
// 			title: 'CAMP 2026',
// 			customCss:['./src/mathjax.css'],
//             plugins: [starlightThemeNova({nav:[
//                 { label: 'Information Booklet', href: '/general/informationbook' },
//                 { label: 'Schedule', href: 'https://camp.iiserpune.ac.in/schedule' },
//             ],
//         })],
//             sidebar: [
//             {
//                 label: 'General',
//                 items: [
//                 {
//                     autogenerate: { directory: 'general' },
//                 },
//                 ],
//             },
//             {
//                 label: 'Software Installation',
//                 items: [
//                 {
//                     autogenerate: { directory: 'softwareinstallation' },
//                 },
//                 ],
//             },
//             // {
//             //     label: 'Projects',
//             //     items: [
//             //     'projects/project-guidelines',
//             //     {
//             //         label: 'Week 1',
//             //         items: [
//             //         'projects/w1projectgroups',
//             //         'projects/w1projectideas',
//             //         ],
//             //     },
//             //     {
//             //         label: 'Week 2',
//             //         items: [
//             //         'projects/w2projectgroups',
//             //         'projects/w2projectideas',
//             //         ],
//             //     },
//             //     ],
//             // },
//             ],
// 		}),
// 	],
// });

