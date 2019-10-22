<template>
  <section>
    <div class="container">
      <div class="project-auth-form-container">
        <h2>{{title}}</h2>
        <div class="project-error" v-if = "$store.state.auth.signupError !=''">
           {{$store.state.auth.signupError}}
        </div>
        <div class="input-container">
          <input type="email" placeholder="Enter your email" id="email" v-model="email">
        </div>

        <div class="input-container">
          <input type="password" placeholder="Enter a password" id="password" v-model="password">
        </div>

         <div class="input-container">
          <input type="password" placeholder="Confirm your password" id="confirmPassword" v-model="confirmPassword">
        </div>
        <div class="input-container">
         <button class="project-base-btn project-green-btn full-width" @click="onSubmit">Submit</button>
        </div>
      </div>
    </div>
    <p class="project-auth-link center">Already have an account?
     <router-link v-if="!auth"  active-class="active" to="/auth/signin" title="Sign In Page">Sign in here.</router-link>
    </p>
  </section>
</template>

<script>
//import { Auth } from 'aws-amplify'

export default {
  name: 'SignUpComponent',
  data () {
    return {
      title: 'Sign Up',
      content: '',
      email: '',
      password: '',
      confirmPassword: ''
    
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('auth/signup', {email: this.email, password: this.password})
    }
  },
  created(){
    if(this.$store.state.auth.confirm ==true){
      this.$router.replace('/confirm')
    }
  }
}
</script>

<style lang="scss">



</style>