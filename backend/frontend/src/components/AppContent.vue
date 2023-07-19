<template>
  <div>
    <div v-if="books.length === 0 && authors.length === 0 && languages.length === 0">
      <div class="button-form" v-show="!showForm">
        <p>Привет, пока что в каталоге нет книг, поэтому предлагаю тебе нажать кнопку, чтобы добавить книгу!</p>
        <button class="create-button" @click.stop="showForm = true">Добавить книгу в каталог</button>
      </div>
      <AppCreateForm v-if="showForm" @create="addBook" @close="closeCreateForm" :authors="authors" :languages="languages"></AppCreateForm>
    </div>
    <div v-else>
      <button class="create-button-2" v-show="!editingBook && !showForm" @click.stop="showForm = true">Хотите добавить еще 1 книгу?</button>
      <div v-if="!editingBook && !showForm">
        <AppTable :books="books" :authors="authors" :languages="languages" @delete-book="deleteBook" @edit="editBook"></AppTable>
      </div>
      <div v-if="showForm || editingBook">
        <AppCreateForm v-if="showForm" :authors="authors" :languages="languages" @create="addBook" @close="closeCreateForm"></AppCreateForm>
        <AppEditForm v-if="editingBook" :book="editingBook" :authors="authors" :languages="languages" @update="updateBook" @close="closeEditForm"></AppEditForm>
      </div>
    </div>
  </div>
</template>

<script>
import AppCreateForm from "@/components/AppCreateForm.vue";
import AppTable from "@/components/AppTable.vue";
import AppEditForm from "@/components/AppEditForm.vue";

export default {
  components: { AppCreateForm, AppTable, AppEditForm },
  name: "AppContent",
  data() {
    return {
      books: [],
      authors: [],
      languages: [],
      showForm: false,
      editingBook: null,
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await this.$ajax.get('api/book/');
        this.books = response.data;
      } catch (error) {
        console.error('Ошибка при получении списка книг:', error);
      }
    },
    async fetchAuthors() {
      try {
        const response = await this.$ajax.get('https://sdkmynikita.pythonanywhere.com/api/author/');
        this.authors = response.data;
      } catch (error) {
        console.error('Ошибка при получении списка авторов:', error);
      }
    },
    async fetchLanguages() {
      try {
        const response = await this.$ajax.get('https://sdkmynikita.pythonanywhere.com/api/language/');
        this.languages = response.data;
      } catch (error) {
        console.error('Ошибка при получении списка языков:', error);
      }
    },
    async addBook(newBook) {
      try {
        const response = await this.$ajax.post('https://sdkmynikita.pythonanywhere.com/api/book/', newBook);
        this.books.push(response.data);
        this.showForm = false;
      } catch (error) {
        console.error('Ошибка при добавлении книги:', error);
      }
    },
    async deleteBook(book) {
      try {
        await this.$ajax.delete(`https://sdkmynikita.pythonanywhere.com/api/book/${book.id}/`);
        this.books = this.books.filter((item) => item.id !== book.id);
      } catch (error) {
        console.error('Ошибка при удалении книги:', error);
      }
    },
    async updateBook(updatedBook) {
      try {
        const response = await this.$ajax.put(`https://sdkmynikita.pythonanywhere.com/api/book/${updatedBook.id}/`, updatedBook);
        const index = this.books.findIndex((item) => item.id === response.data.id);
        if (index !== -1) {
          this.books.splice(index, 1, response.data);
        }
        this.closeEditForm();
      } catch (error) {
        console.error('Ошибка при обновлении книги:', error);
      }
    },
    editBook(book) {
      this.editingBook = book;
    },
    closeEditForm() {
      this.editingBook = null;
    },
    closeCreateForm() {
      this.showForm = false;
    },
  },
  watch: {
    editingBook(newValue) {
      if (newValue) {
        this.showForm = false;
      }
    }
  },
  created() {
    this.fetchBooks();
    this.fetchAuthors();
    this.fetchLanguages();
  },
};
</script>


<style scoped>
@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}

.create-button-2 {
  box-shadow: 0 0 50px #00eeff;
  background: #0ef;
  color: black;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 30px auto;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}

.create-button-2:hover {
  animation: animate 3s linear infinite;
}

.button-form {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
  box-shadow: 0 0 50px #00eeff;
  border-radius: 100px;
}

.button-form:hover {
  animation: animate 3s linear infinite;
}

.create-button {
  position: relative;
  width: 15%;
  height: 40px;
  background: #0ef;
  box-shadow: 0 0 10px #0ef;
  font-size: 16px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  outline: none;
  margin-top: 10px;
}</style>
