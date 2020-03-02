<template>
  <section>
    <div class="container">
      <div class="project-auth-form-container">
        <h2 class="center">{{title}}</h2>
        <div class="project-error" v-if = "$store.state.auth.loginError !=''">
        {{$store.state.auth.loginError}}
        </div>
        <div class="input-container">
        <input type="email" placeholder="Enter your email" id="email" v-model="email">
        </div>

        <div class="input-container">
        <input type="password" placeholder="Enter a password" id="password" v-model="password">
        </div>

        <div class="input-container">
        <button class="project-base-btn project-green-btn full-width" @click="onSubmit">Submit</button>
        </div>
      </div>
      <p class="project-auth-link center">Don't have an account?
        <router-link class="project-auth-link" v-if="!auth"  active-class="active" to="/auth/signup" title="Sign Up Page"> 
          Sign up here
       </router-link></p>
    </div>
  </section>
</template>

<script>
//import { Auth } from 'aws-amplify'

export default {
  name: 'SignInComponent',
  data () {
    return {
      title: 'Sign In',
      content: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const loginData = {
        username: this.email,
        password: this.password,
      }
      //console.log(loginData)
      //this.$store.dispatch('login',{email: loginData.username, password: loginData.password})

      this.$store.dispatch('auth/login', {email: this.email, password: this.password})
      //this.$store.dispatch('changeCount',this.count)
    }
  },
  computed: {
    auth(){
      return this.$store.getters['auth/isAuthenticated']
    }
  }
}
</script>

<style lang="scss">



</style>