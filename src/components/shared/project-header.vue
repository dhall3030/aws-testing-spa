<template>
  <div>
    <header id="main_header_nav">
      <div class="container">
        <div class="flex flex-row flex-wrap">
          <router-link to="/" class="brand">
            <img class="project-brand-logo" alt="Vue logo" src="../../assets/logo.png">
            <span>{{title}}</span>
          </router-link>
        </div>
      </div>
    </header>
    <btn-toggle-menu @clicked="onClickChild" :open="isOpen"></btn-toggle-menu>
    <div class="overlay" :class="{open: isOpen }" @click="isOpen = !isOpen"></div>
    <div class="side-menu" :class="{open: isOpen }"><div @click="isOpen = !isOpen">close[x]</div>
       <div class="side-menu-links">
        <router-link
          v-for="(link, index) in menuData.links" :key="index"
          :to="link.url" 
          :title="link.title" 
          active-class="active"
          >{{link.name}}
        </router-link>
        <router-link v-if="!auth"  active-class="active" to="/auth/signin" title="Sign In Page">Sign In</router-link>
        <router-link v-if="!auth"  active-class="active" to="/auth/signup" title="Sign Up Page">Sign Up</router-link>
         <router-link v-if="!auth"  active-class="active" to="/auth/confirm" title="Confirm account">Confirm</router-link>
        <router-link v-if="auth"  active-class="active" to="/dashboard" title="Go to dashboard">Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import btnToggleMenu from './btn-toggle-menu.vue'

export default {
  name: 'ProjectHeader',
  props: ['menuData'],
  data () {
    return {
      title: 'Project Header',
      content: 'Creating Components in Vue is easy',
      isOpen: false
    }
  },
  methods: {
    onClickChild (value) {
      this.isOpen = value
    }
  },
  watch:{
    '$route' (to, from){
      this.isOpen = false
    }
  },
  components: {
    btnToggleMenu: btnToggleMenu
  },
  computed: {
    auth(){
      return this.$store.getters['auth/isAuthenticated']
    }
  }
}
</script>

<style lang="scss">

#main_header_nav {
  background-color: #000;
  height: 60px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.brand {
  display: inline-block;
  color: $white;
  text-align: left;
  font-size: 1.3em;
  line-height: 60px;
  text-decoration: none;

  .project-brand-logo {
    vertical-align: middle;
    max-width: 40px;
    height: auto;
    margin-right: 5px;
  }
}

.side-menu {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 2;
  top: 60px;
  right: 0;
  background-color: $white;
  overflow-x: hidden;
  transition: transform 0.5s;
  transform: translateX(250px);
  border-right: 1px solid #2c3e50;

  &.open {
    transform: translateX(0);
  }
}

.side-menu-links {
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    text-align: center;
    padding: 10px;
    display: block;
    background-color: $project-blue;
    color: #fff;
    transition: background-color 0.3s;

    &.router-link-exact-active {
      color: #fff;
      background-color: darken($project-blue, 10%);
    }

    &:hover,
    &:active {
      background-color: darken($project-blue, 10%);
    }
  }
}

.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;

  &.open {
    display: block;
  }
}
</style>
