<template>
  <div>
    <header>{{title}}</header>
    <div>{{content}}</div>
    <div class="container">
      <div class="testing"></div>
      <div class="flex flex-row flex-wrap flex-center">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="test-box">hello</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testing',
  data () {
    return {
      title: 'Testing',
      content: 'Creating Components in Vue is easy'
    }
  }
}
</script>

<style lang="scss">

.testing {
  background-color: $project-blue;
  height: 300px;
  width: 300px;
}

.box {
  width: 100%;
  height: 100px;
  background-color: $project-red;
  box-sizing: border-box;

  &:nth-child(3n+2) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  @media (min-width: 1450px) {
    width: calc(100% / 3);
  }
}

.test-box {
  @include position-element(50%,50%);

  width: 50%;
  height: 300px;
  background-color: $project-blue;
}

</style>
