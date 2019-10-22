import {Auth} from 'aws-amplify'

const state = {
  authorized: false,
  user: null,
  loginError: '',
  signupError: '',
  confirm: false,
  confirmError: '',
  count: 1
}

const mutations = {

  'USER' (state,user) {
    state.authorized = !!user && user.attributes && user.attributes.email_verified
    state.user = user
  },
  'CONFIRM' (state, showConfirm) {
    state.confirm = !!showConfirm;
  },
  'COUNT' (state, number) {
    state.count = number;
  },
  'CONFIRM_ERROR' (state, error) {
    state.confirmError = error;
  },
  'LOGIN_ERROR' (state, error) {
    state.loginError = error;
  },
  'SIGNUP_ERROR' (state, error) {
    state.signupError = error;
  },
}

const actions = {
    changeCount:({commit},countData) =>{
      commit('COUNT',countData)
    },
    login: ({commit}, userData) =>{

      Auth.signIn(
        userData.email,
        userData.password
     )
      .then(response => console.log(user))
      .catch(err => {
        console.log(err)
         const loginError = err.message || err;
         commit('LOGIN_ERROR',loginError)
      });
    }
}

const getters ={


}


export default {
   state,
   mutations,
   actions,
   getters
}