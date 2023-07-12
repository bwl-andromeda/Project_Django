<template>
  <div>
    <div v-if="books.length > 0">
      <h2 class="t-table">Таблица книг</h2>
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
            <th></th>
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
            <td>
              <div class="centered">
                <button @click="$emit('remove', book)">Удалить</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else style="color: orangered">
      Книг в каталоге нет.
    </div>
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
  }
};
</script>

<style scoped>
.t-table {
   text-align: center;
}

.a-table {
   width: 100%;
   border-collapse: collapse;
   margin-bottom: 10px;
}

.a-table th,
.a-table td {
   padding: 12px;
   border: 1px solid #e2e8f0;
}

.a-table th {
   background-color: #f7fafc;
   font-weight: bold;
   color: #4a5568;
}

.a-table td {
   background-color: #ffffff;
}

.a-table tr:nth-child(even) td {
   background-color: #f7fafc;
}

.a-table td:first-child {
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
}

.a-table td:last-child {
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
}

.centered {
   display: flex;
   justify-content: center;
}

.alert-message {
   color: #e53e3e;
   font-weight: bold;
}

</style>

