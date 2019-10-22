import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';

Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
   auth
 }
});

// const state ={
//   count: 0
// };
// export default new Vuex.Store({
//   state
// });

