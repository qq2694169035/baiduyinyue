import Vue from 'vue'
import App from './App.vue'
import router from './router'


// import axios from 'axios'
import axios from './utils/http'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

import { Swipe, SwipeItem } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);

import { List } from 'vant';

Vue.use(List);
Vue.use(Swipe);
Vue.use(SwipeItem);
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

import Vuex from 'vuex'

Vue.use(Vuex);
import store from './store'
import { Icon } from 'vant';

Vue.use(Icon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
