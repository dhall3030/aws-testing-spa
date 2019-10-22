<template>
  <div :class="{open: isOpen }" id="nav-icon" @click="onClickButton">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MenuToggleButton',
  props: ['open'],
  methods: {
    onClickButton (event) {
      this.$emit('clicked', !this.open)
    }
  },
  computed: {
    isOpen(){
      return this.open
    }
  }
}
</script>

<style lang="scss">

#nav-icon {
  width: 30px;
  height: 35px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: $white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 10px;
}

#nav-icon span:nth-child(4) {
  top: 20px;
}

#nav-icon.open span:nth-child(1) {
  top: 10px;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}
</style>
