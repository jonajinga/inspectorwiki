import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'InspectorWiki',
  tagline: 'The Free Encyclopedia for Property Inspectors',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://inspectorwiki.com',
  baseUrl: '/',

  organizationName: 'jonajinga',
  projectName: 'inspectorwiki',

  onBrokenLinks: 'throw',

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
          routeBasePath: 'wiki',
          editUrl: 'https://github.com/jonajinga/inspectorwiki/edit/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/jonajinga/inspectorwiki/edit/main/',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Recent Posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly' as const,
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1200,
        min: 640,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-default.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'InspectorWiki',
      logo: {
        alt: 'InspectorWiki',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {to: '/features', label: 'Features', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {label: 'Getting Started', to: '/wiki/intro'},
            {label: 'Foundations', to: '/wiki/foundations/types-and-defects'},
            {label: 'Roofing', to: '/wiki/roofing/overview'},
            {label: 'Electrical', to: '/wiki/electrical/overview'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Features', to: '/features'},
            {label: 'Style Guide', to: '/style-guide'},
            {label: 'Feedback', to: '/feedback'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'About', to: '/about'},
            {label: 'Contact', to: '/contact'},
            {label: 'Accessibility', to: '/accessibility'},
            {label: 'Privacy Policy', to: '/privacy'},
            {label: 'Contributors', to: '/contributors'},
            {label: 'Sitemap', to: '/sitemap'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/jonajinga/inspectorwiki'},
            {label: 'RSS Feed', href: 'https://inspectorwiki.com/blog/rss.xml'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} InspectorWiki. Content licensed under CC BY-SA 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
