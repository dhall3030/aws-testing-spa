<template>
   <footer id="main_footer">
     <div class="container project-footer-content">
        <h2 class="center">{{title}}</h2>
        <p>{{content}}</p>
        <ul class="footer-links flex flex-row flex-wrap flex-center">
          <li v-for="link in menuData.links">
            <router-link  :to="link.url" :title="link.title">{{link.name}}</router-link>
          </li>
        </ul>
     </div>
   </footer>
</template>

<script>
export default {
  name: 'ProjectFooter',
  props: ['menuData'],
  data () {
    return {
      title: 'Main Footer',
      content: 'Creating Components in Vue is easy'
    }
  }
}
</script>

<style lang="scss">

#main_footer {
  background-color: #f6f6f6;
  padding: 30px 0;
}

.project-footer-content {
  p {
    text-align: center;
  }
}

.footer-links {
  li a {
    padding: 5px;
    display: block;
    color: $project-blue;
  }
}


</style>