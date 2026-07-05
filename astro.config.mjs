import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'; // <-- Add this
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex'; // <-- Add this
import { unified } from '@astrojs/markdown-remark';
import starlightThemeNova from 'starlight-theme-nova';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkGfm, remarkMath], // <-- Add remarkMath here
    rehypePlugins: [rehypeSlug, rehypeKatex], // <-- Add rehypeKatex here
  },

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
          label: 'Reading Material',
          items: [{ autogenerate: { directory: 'reading-material' } }],
        },
        {
          label: 'Software Installation',
          items: [{ autogenerate: { directory: 'softwareinstallation' } }],
        },
      {
        label: 'Projects',
        items: [          
          {
            label: 'Guidelines for projects',
            items: [{ autogenerate: { directory: 'projects/guidelines' } }]
          },
          {
            label: 'Week 1 Projects',
            items: [{ autogenerate: { directory: 'projects/week1' } }]
          },
          {
            label: 'Week 2 Projects',
            items: [{ autogenerate: { directory: 'projects/week2' } }]
          }
        ]
      }
      ],
    }),
  ],
});