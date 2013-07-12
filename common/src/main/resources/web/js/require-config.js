var REQUIREJS_CONFIG = {
  baseUrl: '/web/js/modules',
  urlArgs: 'bust=' + new Date().getTime(),
  paths: {
    lib: '/web/js/lib',
  },
  shim: {
    'lib/jquery': { exports: 'jQuery' },
    'lib/uri': { deps: ['lib/jquery'], exports: 'URI' },
    'lib/bootstrap': { deps: ['lib/jquery'], exports: 'bootstrap' },
    'lib/d3': { deps: ['lib/jquery'], exports: 'd3' },
    'lib/colorbrewer': { exports: 'colorbrewer' },
  }
};