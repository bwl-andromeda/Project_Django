<template>
  <div>
    <h3 class="name-table">Каталог книг:</h3>
    <input type="text" v-model="searchQuery" placeholder="Поиск по каталогу">
    <table class="a-table">
      <thead>
        <tr>
          <th @click="sortByColumn('id')">ID {{ sortSymbol('id') }}</th>
          <th @click="sortByColumn('title')">Название {{ sortSymbol('title') }}</th>
          <th @click="sortByColumn('year')">Год издания {{ sortSymbol('year') }}</th>
          <th @click="sortByColumn('author')">Автор {{ sortSymbol('author') }}</th>
          <th @click="sortByColumn('language')">Язык {{ sortSymbol('language') }}</th>
          <th>Функционал:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in sortedBooks" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.year }}</td>
          <td>{{ getAuthorName(book.author) }}</td>
          <td>{{ getLanguageName(book.language) }}</td>
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
      required: true,
    },
    authors: {
      type: Array,
      required: true,
    },
    languages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortColumn: '',    // Сортируемый столбец
      sortDirection: 1,  // Направление сортировки: 1 для возрастания, -1 для убывания
      searchQuery: '',   // Строка поиска
    };
  },
  computed: {
    sortedBooks() {
      let filteredBooks = this.books;

      // Фильтрация по поисковому запросу
      if (this.searchQuery) {
        const searchQueryLower = this.searchQuery.toLowerCase();
        filteredBooks = this.books.filter(book => {
          return (
            book.title.toLowerCase().includes(searchQueryLower) ||
            book.year.toString().includes(searchQueryLower) ||
            this.getAuthorName(book.author).toLowerCase().includes(searchQueryLower) ||
            this.getLanguageName(book.language).toLowerCase().includes(searchQueryLower)
          );
        });
      }

      if (this.sortColumn) {
        return filteredBooks.slice().sort((a, b) => {
          if (this.sortColumn === 'author') {
            const aAuthor = this.authors.find(author => author.id === a.author);
            const bAuthor = this.authors.find(author => author.id === b.author);
            return this.sortDirection * aAuthor.name.localeCompare(bAuthor.name);
          } else if (this.sortColumn === 'language') {
            const aLanguage = this.languages.find(lang => lang.id === a.language);
            const bLanguage = this.languages.find(lang => lang.id === b.language);
            return this.sortDirection * aLanguage.name.localeCompare(bLanguage.name);
          } else {
            const aValue = a[this.sortColumn];
            const bValue = b[this.sortColumn];
            if (aValue < bValue) return -this.sortDirection;
            if (aValue > bValue) return this.sortDirection;
            return 0;
          }
        });
      }

      return filteredBooks;
    },
  },
  methods: {
    getAuthorName(authorId) {
      const author = this.authors.find(author => author.id === authorId);
      return author ? author.name : '';
    },
    getLanguageName(languageId) {
      const language = this.languages.find(lang => lang.id === languageId);
      return language ? language.name : '';
    },
    deleteBook(book) {
      // Передаем объект книги, а не только id, для удаления из списка books
      this.$emit('delete-book', book);
    },
    async editBook(book) {
      this.$emit('edit', book);
    },
    sortByColumn(column) {
      if (this.sortColumn === column) {
        this.sortDirection *= -1; // Переключение направления сортировки, если тот же столбец был выбран снова
      } else {
        this.sortColumn = column;
        this.sortDirection = 1; // По умолчанию сортируем по возрастанию при выборе нового столбца
      }
    },
    sortSymbol(column) {
      if (this.sortColumn === column) {
        return this.sortDirection === 1 ? '▲' : '▼';
      }
      return '';
    },
  },
}
</script>


<style scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.button-bucket {
  position: page;
  top: 55.1px;
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
