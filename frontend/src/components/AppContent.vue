<template>
  <div>
    <div v-if="books.length === 0">
      <div class="button-form" v-show="!showForm">
        <p>Привет, пока что в каталоге нет книг, поэтому предлагаю тебе нажать кнопку, чтобы добавить книгу!</p>
        <button class="create-button" @click.stop="showForm = true">Добавить книгу в каталог</button>
      </div>
      <AppCreateForm v-if="showForm" @create="addBook" @close="closeCreateForm"></AppCreateForm>
    </div>
    <div v-else>
      <button class="create-button-2" v-show="!editingBook && !showForm" @click.stop="showForm = true">Хотите добавить еще
        1 книгу?</button>
      <div v-if="!editingBook && !showForm">
        <AppTable :books="books" @delete="deleteBook" @edit="editBook"></AppTable>
      </div>
      <div v-if="showForm || editingBook">
        <AppCreateForm v-if="showForm" @create="addBook" @close="closeCreateForm"></AppCreateForm>
        <AppEditForm v-if="editingBook" :book="editingBook" @update="updateBook" @close="closeEditForm"></AppEditForm>
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
      showForm: false,
      editingBook: null,
    };
  },
  methods: {
    addBook(book) {
      book.id = this.books.length + 1;
      this.books.push(book);
      this.showForm = false;
    },
    deleteBook(book) {
      const index = this.books.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    },
    editBook(book) {
      this.editingBook = book;
      this.showForm = false;
    },
    updateBook(updatedBook) {
      const index = this.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        this.books.splice(index, 1, updatedBook);
      }
      this.closeEditForm();
    },
    closeCreateForm() {
      this.showForm = false;
      this.editingBook = null;
    },
    closeEditForm() {
      this.editingBook = null;
    }
  },
  watch: {
    editingBook(newValue) {
      if (newValue) {
        this.showForm = false;
      }
    }
  }
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
