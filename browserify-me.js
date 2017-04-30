const VueSlugify = require('./vue-slugify.js');

global.VueSlugify = VueSlugify;

window.Vue && global.Vue.use(VueSlugify);