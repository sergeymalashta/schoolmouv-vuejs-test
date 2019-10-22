const requireModule = require.context('.', true, /index\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
  // Don't register this file as a Vuex module
  if (fileName === './index.js') {
    return;
  }
  const moduleName = fileName.replace(/(\.\/|\/index.js)/g, '');
  modules[moduleName] = {
    namespaced: true,
		strict: true,
    ...requireModule(fileName).default
  };
});

export default modules;
