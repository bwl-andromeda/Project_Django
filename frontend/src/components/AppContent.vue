<template>
  <div>
    <div class="x-actions">
      <x-select v-model="selectedSort" :options="sortOptions"></x-select>
      <x-button @click="createFormVisible = true" style="margin: auto;" class="success">
        Добавить
      </x-button>
    </div>
    <AppTable :books="sortedBooks" @remove="removeBook"></AppTable>
    <div v-if="createFormVisible" class="x-overlay" @click="createFormVisible = false">
      <div class="x-dialog">
        <div class="x-dialog--content" @click.stop>
          <h3 class="form-title"></h3>
          <AppCreateForm @create="addBook"></AppCreateForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCreateForm from "@/components/AppCreateForm.vue";
import AppTable from "@/components/AppTable.vue";

export default {
  components: { AppCreateForm, AppTable },
  name: "AppContent",
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Последняя книга",
          year: 2015,
          isbn: "123456789",
          author: "Иванов Иван",
          language: "Русский",
          genre: "Фантастика"
        },
        {
          id: 2,
          title: "Вторая книга",
          year: 2016,
          isbn: "12",
          author: "Serge",
          language: "Английский",
          genre: "Хоррор"
        }
      ],
      createFormVisible: false,
      selectedSort: "",
      sortOptions: [
        { value: "id", name: "По айди" },
        { value: "title", name: "По названию" },
        { value: "year", name: "По году выпуска" },
        { value: "isbn", name: "По ISBN" },
        { value: "author", name: "По автору" },
        { value: "language", name: "По языку" },
        { value: "genre", name: "По жанру" }
      ]
    };
  },
  computed: {
    sortedBooks() {
      return [...this.books].sort((book1, book2) => {
        if (book1[this.selectedSort] < book2[this.selectedSort]) {
          return -1;
        }
        if (book1[this.selectedSort] > book2[this.selectedSort]) {
          return 1;
        }
        return 0;
      });
    },
  },
  methods: {
    addBook(book) {
      this.createFormVisible = false;
      book.id = this.books.length + 1;
      this.books.push(book);
    },
    removeBook(book) {
      this.books = this.books.filter(elem => elem.id !== book.id);
    }
  }
};
</script>

<style scoped>
/* ... */

.x-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.x-dialog--content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}

.form-title {
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
}
</style>
