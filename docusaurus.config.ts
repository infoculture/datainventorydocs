import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const REPO_URL = 'https://github.com/infoculture/datainventorydocs';

const config: Config = {
  title: 'Карты данных',
  tagline: 'Как выяснить, где лежат данные, кто ими владеет и насколько они доступны',

  future: {
    v4: true,
  },

  // Постоянный адрес книги не выбран: пока сайт собирается под GitHub Pages репозитория.
  url: 'https://infoculture.github.io',
  baseUrl: '/datainventorydocs/',
  organizationName: 'infoculture',
  projectName: 'datainventorydocs',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Карты данных',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bookSidebar',
          position: 'left',
          label: 'Книга',
        },
        {
          to: '/atlas/how-to-read/',
          label: 'Атлас',
          position: 'left',
        },
        {
          to: '/sources/overview/',
          label: 'Источники сведений',
          position: 'left',
        },
        {
          href: REPO_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Книга',
          items: [
            {label: 'О книге', to: '/'},
            {label: 'Виды карт данных', to: '/map-types/classification/'},
            {label: 'Как составить карту', to: '/method/process/'},
            {label: 'Атлас карт данных', to: '/atlas/how-to-read/'},
            {label: 'Скачать PDF', to: 'pathname:///data-maps-book.pdf'},
          ],
        },
        {
          title: 'Справочник',
          items: [
            {label: 'Где искать сведения о данных', to: '/sources/overview/'},
            {label: 'Нормативная база', to: '/appendices/legal-framework/'},
            {label: 'Глоссарий', to: '/appendices/glossary/'},
          ],
        },
        {
          title: 'Проект',
          items: [
            {label: 'Репозиторий на GitHub', href: REPO_URL},
            {label: 'Книга «Каталоги данных»', href: 'https://github.com/ivbeg/data-catalogs-book'},
          ],
        },
      ],
      copyright:
        '© 2026 Иван Бегтин, «Карты данных», черновик октября 2026 года. Текст доступен по лицензии ' +
        '<a href="https://creativecommons.org/licenses/by/4.0/deed.ru">CC BY 4.0</a>.',
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
