<template>
   <div class="books container">
    <h1>{{title}}</h1>
    <ul v-for="book in books" :key="book.bookId">
        <li :id="book.bookId">
        {{book.title}}
        </li>
      </ul>
  </div>
</template>

<script>

//import axios from 'axios'
export default {
  name: 'BooksComponent',
  data () {
    return {
      title: 'Get Book List 3',
      content: 'Creating Components in Vue is easy',
      books: null
    }
  },
  mounted () {
    this.axios.get('/book-list/all')
    .then(response =>{

      this.books = response.data;
      console.log(response);

    })
    .catch(error => console.log(error))
  }
}
</script>

<style lang="scss">



</style>