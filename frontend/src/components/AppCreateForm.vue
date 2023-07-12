<template>
  <div>
    <form class="a-form" @submit.prevent>
      <h3 style="margin: 10px auto;">Добавить книгу</h3>
      <x-input type="text" placeholder="Название книги" class="x-input" v-model.trim="book.title"/>
      <x-input type="text" placeholder="Год" class="x-input" v-model.trim="book.year"/>
      <x-input type="text" placeholder="ISBN" class="x-input" v-model.trim="book.isbn"/>
      <x-input type="text" placeholder="Автор" class="x-input" v-model.trim="book.author"/>
      <x-input type="text" placeholder="Язык" class="x-input" v-model.trim="book.language"/>
      <x-input type="text" placeholder="Жанр" class="x-input" v-model.trim="book.genre"/>
      <x-button @click="addBook">Добавить</x-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppCreateForm",
  data() {
    return {
      book: {
        title: "",
        year: "",
        isbn: "",
        author: "",
        language: "",
        genre: ""
      }
    };
  },
  methods: {
    addBook() {
      this.$emit("create", {...this.book});

      this.book.title = "";
      this.book.year = "";
      this.book.isbn = "";
      this.book.author = "";
      this.book.language = "";
      this.book.genre = "";
    }
  }
};
</script>

<style scoped>
.a-form {
   display: grid;
   padding: 5px;
   margin: 1px auto;
   max-width: 400px;
   border-radius: 40px;
   box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
}

</style>