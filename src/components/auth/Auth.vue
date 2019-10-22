<template>
  <div class="project-auth">
    <header>{{title}}</header>
    <div>{{content}}</div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AuthComponent',
  data () {
    return {
      title: 'Auth Component',
      content: 'Creating Components in Vue is easy',
    }
  }
}
</script>

<style lang="scss">

.project-auth {
  background-color: #68ca9e;
  min-height: 50vh;
  padding-bottom: 1px;
}

.project-auth-form-container {
  width: auto;
  height: auto;
  margin: 0 auto;
  background-color: $white;
  padding: 50px;
  border-radius: 5px;

  @media (min-width: 1450px) {
    width: 500px;
  }
}

.project-auth-link {
  color: $white;
  margin-bottom: 20px;
  font-size: 1em;
  a {
    text-decoration: underline;
  }
}

.slide-enter-active {
  animation: slideInRight 0.5s both ease-in;
}

.slide-leave-active {
  animation: slideOutLeft 0.5s both ease-in;
}

@keyframes slideOutLeft {
  to {
    transform: translateX(-100%)
  }
}


@keyframes slideInRight {

  from {
     transform: translateX(100%)
  }
  to {
      transform: translateX(0)
  }
}

</style>