<template>
  <div>
    <h3 class="name-table"> Каталог книг: </h3>
    <table class="a-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Год издания</th>
          <th>ISBN</th>
          <th>Автор</th>
          <th>Язык</th>
          <th>Жанр</th>
          <th>Функционал:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.year }}</td>
          <td>{{ book.isbn }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.language }}</td>
          <td>{{ book.genre }}</td>
          <td class="button-wrapper">
            <button class="button-edit" @click="editBook(book)">✎</button>
            <button class="button-bucket" @click="deleteBook(book)">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppTable",
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteBook(id) {
      this.$emit("delete", id);
    },
    editBook(id) {
      this.$emit("edit", id);
    }
  }
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.button-bucket {
  position: absolute;
  top: 59.4px;
  right: 75px;
  margin-left: 15px;
  bottom: 11px;
  width: 32px;
  height: 32px;
  background: #0ef;
  box-shadow: 0 0 10px #0ef;
  font-size: 25px;
  color: black;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
}
.button-edit {
  position: page;
  top: 45px;
  margin-left: -40px;
  bottom: 11px;
  width: 32px;
  height: 32px;
  background: #0ef;
  box-shadow: 0 0 10px #0ef;
  font-size: 20px;
  color: black;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
}
.name-table {
  text-align: center;
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 20px;
}

.a-table {
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  transition: border 0.13s ease-in-out;
}

.a-table:hover {
  border: 5px solid #00eeff;
  box-shadow: 0 0 5px #00eeff, inset 0 0 5px #00eeff;
}

.a-table {
  animation: animate 10s linear infinite;
}

.a-table td {
  padding: 15px;
  border: 1px solid white;
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}

.a-table th,
a-table td {
  border: 1px solid white;
  padding: 8px;
  text-align: center;
}
</style>
