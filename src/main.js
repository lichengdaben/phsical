import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import "./plugins/element.js";
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'vue-good-table/dist/vue-good-table.css'

 import '@/icons'
// Default tag name is 'svgicon'

 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars,faExclamation, faAngleDown, faAngleRight, faRightLong, faDisplay, faPrint, faCircleRight, faRotateRight, faReply, faArrowRotateLeft,faFileLines,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faUser } from '@fortawesome/free-regular-svg-icons'

import VueGoodTablePlugin from 'vue-good-table';
import Vuesax from 'vuesax';
import SvgIcon from './icons/index.js';

Vue.use(SvgIcon);



/* add icons to the library */
library.add(faExclamation);
library.add(faAngleDown);
library.add(faAngleRight);
library.add(faRightLong);
library.add(faDisplay);
library.add(faPrint);
library.add(faCircleRight);
library.add(faRotateRight);
library.add(faReply);
library.add(faFolder);
library.add(faArrowRotateLeft);
library.add(faUser);
library.add(faFileLines);
library.add(faMagnifyingGlass);
library.add(faBars);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuesax, {});
Vue.use(VueGoodTablePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.sortBasedProperty=function(propertyName) {
    return function (obj1, obj2) {
      let value1 = obj1[propertyName];
      let value2 = obj2[propertyName];
      if (value1 < value2) {
        return -1;
      } else if (value1 === value2) {
        return 0;
      } else {
        return 1;
      }
    };
  }