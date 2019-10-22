<template>
  <section>
    <div class="container">
      <header>{{title}}</header>
      <div>{{content}}</div>
      {{$store.state.auth.user.attributes}}
      <button @click=logout>Logout</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Dashboard',
  data () {
    return {
      title: 'Dashboard',
      content: 'Welcome to the dashboard!'
    }
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
  }
}
</script>

<style lang="scss">



</style>