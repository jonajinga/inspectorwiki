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
      } satisfies Preset.Options,
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
        {
          href: 'https://github.com/jonajinga/inspectorwiki',
          label: 'GitHub',
          position: 'right',
        },
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
          title: 'Community',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/jonajinga/inspectorwiki'},
            {label: 'Contribute', to: '/wiki/intro'},
          ],
        },
        {
          title: 'More',
          items: [
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
