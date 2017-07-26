/* eslint-disable global-require */
export default [
  {
    name: 'blockquote',
    label: 'Blockquote',
    markdown: require('../../src/blockquote/README.md'),
    samples: require('./samples/blockquote').default,
  },
  {
    name: 'navbar',
    label: 'NavBar',
    markdown: require('../../src/navbar/README.md'),
    samples: require('./samples/navbar').default,
  },
  {
    name: 'panel',
    label: 'Panel',
    markdown: require('../../src/panel/README.md'),
    samples: require('./samples/panel').default,
  },
  {
    name: 'panelList',
    label: 'PanelList',
    markdown: require('../../src/panelList/README.md'),
    samples: require('./samples/panelList').default,
  },
  {
    name: 'search',
    label: 'Search',
    markdown: require('../../src/search/README.md'),
  },
  {
    name: 'tabs',
    label: 'Tabs',
    markdown: require('../../src/tabs/README.md'),
    samples: require('./samples/tabs').default,
  },
]
