<template>
    <div>
      <h2>Добавить книгу</h2>
      <form class="t-form" @submit.prevent="addBook">
        <div>
          <label for="title">Название:</label>
          <input class="t-input" type="text" id="title" v-model="book.title" required>
        </div>
        <div>
          <label for="year">Год издания:</label>
          <input class="t-input" type="number" id="year" v-model="book.year" required>
        </div>
        <div>
          <label for="isbn">ISBN:</label>
          <input class="t-input" type="text" id="isbn" v-model="book.isbn" required>
        </div>
        <div>
          <label for="author">Автор:</label>
          <select id="author" v-model="book.author" required>
            <option v-for="author in authors" :value="author.id" :key="author.id">{{ author.name }}</option>
          </select>
        </div>
        <div>
          <label for="language">Язык:</label>
          <select id="language" v-model="book.language" required>
            <option v-for="language in languages" :value="language.id" :key="language.id">{{ language.name }}</option>
          </select>
        </div>
        <div>
          <label for="genres">Жанры:</label>
          <select id="genres" v-model="book.genres" multiple required>
            <option v-for="genre in genres" :value="genre.id" :key="genre.id">{{ genre.name }}</option>
          </select>
        </div>
        <button class="t-btn" type="submit">Добавить</button>
      </form>
  
      <h2 class="t-table">Таблица книг</h2>
      <table class="table_blur">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Год издания</th>
            <th>ISBN</th>
            <th>Автор</th>
            <th>Язык</th>
            <th>Жанры</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.year }}</td>
            <td>{{ book.isbn }}</td>
            <td>{{ getAuthorName(book.author) }}</td>
            <td>{{ getLanguageName(book.language) }}</td>
            <td>{{ getGenresNames(book.genres) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Content",
    data() {
      return {
        book: {
          title: '',
          year: null,
          isbn: '',
          author: null,
          language: null,
          genres: []
        },
        authors: [
          { id: 1, name: 'Автор 1' },
          { id: 2, name: 'Автор 2' },
          { id: 3, name: 'Автор 3' }
        ],
        languages: [
          { id: 1, name: 'Язык 1' },
          { id: 2, name: 'Язык 2' },
          { id: 3, name: 'Язык 3' }
        ],
        genres: [
          { id: 1, name: 'Жанр 1' },
          { id: 2, name: 'Жанр 2' },
          { id: 3, name: 'Жанр 3' }
        ],
        books: []
      };
    },
    computed: {
      selectedGenres() {
        return [...this.book.genres];
      }
    },
    methods: {
      addBook() {
        const newBook = {
          id: this.books.length + 1,
          title: this.book.title,
          year: this.book.year,
          isbn: this.book.isbn,
          author: this.book.author,
          language: this.book.language,
          genres: this.book.genres,
        };
  
        this.books.push(newBook);
  
        this.book = {
          title: '',
          year: null,
          isbn: '',
          author: null,
          language: null,
          genres: []
        };
      },
      getAuthorName(authorId) {
        const author = this.authors.find(author => author.id === authorId);
        return author ? author.name : '';
      },
      getLanguageName(languageId) {
        const language = this.languages.find(language => language.id === languageId);
        return language ? language.name : '';
      },
      getGenresNames(genreIds) {
        const genres = this.genres.filter(genre => genreIds.includes(genre.id));
        return genres.map(genre => genre.name).join(', ');
      }
    }
  };
  </script>
  
  <style scoped>
    .t-form {
        border-top: 1px solid #777777;	
        border-bottom: 1px solid #777777; 
        box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
        background: linear-gradient(#9595b6, #5a567f);
        color: rgb(0, 0, 0);
        padding: 10px 15px;
        position: relative
      }
      h2 {
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
        font-weight: 600;
        letter-spacing: 1px;
        color: rgb(0, 0, 0);
        text-shadow: 1px 1px 0 rgb(41, 40, 40);
        background: linear-gradient(#9595b6, #5a567f);
        border-bottom: 1px solid #777777;
        box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
        
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
      }
    .t-input {
        margin-bottom: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        padding: 10px;
        font-size: 16px;
        color: #333;
        outline: none;
        box-sizing: border-box;
        &::placeholder {
          color: #999;
        }
    }
    .table_blur {
  background: #f5ffff;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
}
.table_blur th {
  border-top: 1px solid #777777;	
  border-bottom: 1px solid #777777; 
  box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
  background: linear-gradient(#9595b6, #5a567f);
  color: rgb(5, 5, 5);
  padding: 10px 15px;
  position: relative;
  text-align: left;
  font-size: 16px;
}
.table_blur th:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 25%;
  height: 25%;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255,255,255,.08));
}
.table_blur tr:nth-child(odd) {
  background: #ebf3f9;
}
.table_blur th:first-child {
  border-left: 1px solid #777777;	
  border-bottom:  1px solid #777777;
  box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
}
.table_blur th:last-child {
  border-right: 1px solid #777777;
  border-bottom:  1px solid #777777;
  box-shadow: inset -1px 1px 0 #999999, inset 0 -1px 0 #999999;
}
.table_blur td {
  border: 1px solid #e3eef7;
  padding: 10px 15px;
  position: relative;
  transition: all 0.5s ease;
  
}
.table_blur tbody:hover td {
  color: transparent;
  text-shadow: 0 0 3px #a09f9d;
}
.table_blur tbody:hover tr:hover td {
  color: #444444;
  text-shadow: none;
}
  </style>
  