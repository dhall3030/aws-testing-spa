import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Amplify from 'aws-amplify'


const awsExports = {
  // found in your generated aws-export.js file:
  aws_project_region: process.env.VUE_APP_PROJECT_REGION,

  aws_cognito_identity_pool_id: process.env.VUE_APP_COGNITO_IDENTITY_POOL_ID,

  // your new user pool region
  aws_cognito_region: process.env.VUE_APP_COGNITO_REGION,

  // 'Pool Id' found under user pool 'General settings'
  aws_user_pools_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,

  // New 'App client id' under user pool 'App clients'
  aws_user_pools_web_client_id: process.env.VUE_APP_COGNITO_CLIENT_ID,

  // Any other Amplify services settings
}

console.log(awsExports)

Amplify.configure(awsExports)

axios.defaults.baseURL = 'https://gjdb9wld4c.execute-api.us-east-2.amazonaws.com/dev';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('CognitoIdentityServiceProvider.6khlh2h130vf1nta5t81uj37r5.5c1142db-b3c5-4c82-a663-88ce3123fa1f.idToken');

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
