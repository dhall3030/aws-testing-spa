<template>
   <section>
    <div class="container">
      <div class="project-auth-form-container">
        <h2 class="center">{{title}}</h2>
        <div class="project-error" v-if = "$store.state.auth.confirmError !=''">
          {{$store.state.auth.confirmError}}
        </div>

        <div class="input-container">
          <input type="email" placeholder="Enter your email" id="confirmEmail" v-model="confirmEmail">
        </div>

        <div class="input-container">
          <input type="text" placeholder="Enter your confirmation code" id="code" v-model="confirmConfirmation">
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

export default {
  name: 'Confirm',
  data () {
    return {
      title: 'Confirm Account',
      content: '',
      confirmEmail:'',
      confirmConfirmation:''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('auth/confirm', {email: this.confirmEmail, code: this.confirmConfirmation})
    }
  }
}
</script>

<style lang="scss">



</style>