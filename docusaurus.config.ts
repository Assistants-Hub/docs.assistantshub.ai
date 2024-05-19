import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Assistants Hub - Docs',
  tagline: 'Documentation for Assistants Hub',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.assistantshub.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'assistants-hub', // Usually your GitHub org/user name.
  projectName: 'assistantshub.ai', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/assistants-hub/docs.assistantshub.ai/edit/main/sidebars.ts',
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/assistants-hub/docs.assistantshub.ai/edit/main/blog/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    "@gracefullight/docusaurus-plugin-vercel-analytics",
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpeg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Assistants Hub Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'https://www.assistantshub.ai',
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/docs/category/demos', label: 'Demos', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: 'https://github.com/assistants-hub/assistantshub.ai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Demos',
              to: '/docs/category/demos',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'X',
              to: 'https://www.assistantshub.ai/pages/privacy.html',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.assistantshub.ai/pages/terms.html',
            },
            {
              label: 'Github',
              to: 'https://github.com/assistants-hub',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              icon: 'privacy',
              to: 'https://www.assistantshub.ai/pages/privacy.html',
            },
            {
              label: 'Terms of Service',
              to: 'https://www.assistantshub.ai/pages/terms.html',
            },
            {
              label: 'Cookie Policy',
              to: 'https://www.assistantshub.ai/pages/cookies.html',
            },
          ],
        }
      ],
      logo: {
        alt: 'Assistants Hub Logo',
        src: 'img/logo.png',
        href: 'https://assistantshub.ai',
        width: 100,
      },
      copyright: `© ${new Date().getFullYear()} Assistants Hub, LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
