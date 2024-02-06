// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const baseUrl = process.env.BASE_URL ?? "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),

    //    'plugin-image-zoom',
    //    '@chatwoot/docusaurus-plugin',
    //    [
    //      require.resolve("@easyops-cn/docusaurus-search-local"),
    //      {
    //        indexDocs: true,
    //        indexBlog: false,
    //        indexPages: true,
    //        language: "en",
    //        hashed: true
    //      }
    //    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    "@docusaurus/theme-live-codeblock",
    "docusaurus-theme-redoc",
  ],

  title: "Leafline Garden Design LLC",
  tagline: "Your garden is a canvas, and our goal is to help you create a masterpiece that reflects your style while respecting and enhancing the natural environment. Let's create something beautiful together!",
  url: "https://leaflinegarden.design",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  organizationName: "patriciamcphee", // Usually your GitHub org/user name.
  projectName: "leafline", // Usually your repo name.
  trailingSlash: false,
  customFields: {
    // Put your custom environment here
    jobTitle: "Crafting Bot Conversations, Empowering Users",
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: true,
          breadcrumbs: false,
         // sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          showLastUpdateTime: true,
          //          editUrl:
          //          'https://github.com/patriciamcphee/portfolio/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        id: "apiv1",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "static/api/v2.yaml",
            url: "api/v2.yaml",
            route: "api",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#5077c5",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "",
          src: "img/logo.png",
          className: 'header-logo',
        },
        items: [
          /*         { 
          to: "/api/", 
          label: "API", 
          position: "left" 
        },

        {
          type: 'doc',
          docId: 'page',
          position: 'right',
          label: 'Home',
        },
        {
					href: '#about',
					label: 'About', position: 'right'
				},
*/
        {
          type: 'doc',
          docId: 'page',
          position: 'right',
          label: '(206) 880-0886',
        },
        {
					href: 'https://form.jotform.com/240356312632044',
					label: 'Request a Consultation!', position: 'right'
				},
        
          /*
           {
            label: 'Support',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'https://github.com/gobeyondidentity',
                label: 'GitHub',
               },
               {
                to: 'https://stackoverflow.com/questions/tagged/beyondidentity',
                label: 'Stack Overflow',
               },
               {
                to: 'https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ',
                label: 'Slack',
               },
               {
                to: 'https://twitter.com/BI_Developers',
                label: 'Twitter',
               },
               {
                to: 'https://dev.to/beyondidentity',
                label: 'DevTo',
               },
            ],
          }, 
*/
        ],
      },
      footer: {
        
        logo: {
          alt: "LeafLine Garden Design LLC",
          src: "img/logo-white-full.png",

        },
        copyright: `© ${new Date().getFullYear()} Leafline Garden Design     •     (206) 880-0886`,
      },
      prism: {
        theme: lightCodeTheme,
        //        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),
};

module.exports = config;
