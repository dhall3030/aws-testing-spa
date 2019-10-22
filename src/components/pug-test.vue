<template lang="pug">
  section
    div.container
      div(class='title') {{title}}
      div(class='content') {{content}}
</template>

<script>
export default {
  name: 'PugTest',
  data () {
    return {
      title: 'Pug Test',
      content: 'Testing for pug'
    }
  }
}
</script>

<style lang="scss">



</style>
