<template>
  <div>
    <div class="center-wrapper">
      <div class="wrapper">
        <div class="form-wrapper-sign-in">
          <form @submit.prevent="addBook">
            <h2>Параметры книги:</h2>
            <div class="input-group">
              <input type="text" v-model.trim="book.title" />
              <label>Название:</label>
              <p class="warning-dialogs" v-if="$v.book.title.$dirty && !$v.book.title.required">Обязательное поле</p>
              <p class="warning-dialogs" v-if="$v.book.title.$dirty && !$v.book.title.minLength">Здесь должно быть больше 5 символов</p>
            </div>
            <div class="input-group">
              <input type="number" v-model.number="book.year" />
              <label>Год:</label>
              <p class="warning-dialogs" v-if="$v.book.year.$dirty && !$v.book.year.required">Обязательное поле</p>
              <p class="warning-dialogs" v-if="$v.book.year.$dirty && !$v.book.year.between">Год должен быть между 1900 и 2023</p>
            </div>
            <div class="input-group">
              <input type="number" v-model.number="book.isbn" />
              <label>ISBN:</label>
              <p class="warning-dialogs" v-if="$v.book.isbn.$dirty && !$v.book.isbn.minLength">ISBN должен состоять из 13 символов</p>
            </div>
            <div class="input-group">
              <select v-model.trim="book.author">
                <option value=""></option>
                <!-- Add options for authors here -->
              </select>
              <label>Автор:</label>
            </div>
            <div class="input-group">
              <select v-model.trim="book.language">
                <option value=""></option>
                <!-- Add options for languages here -->
              </select>
              <label>Язык:</label>
            </div>
            <div class="input-group">
              <select v-model.trim="book.genre">
                <option value=""></option>
                <!-- Add options for genres here -->
              </select>
              <label>Жанр:</label>
            </div>
            <div>
              <button class="create-button" @click="addBook">Добавить</button>
            </div>
            <button class="close-button" @click.prevent="closeForm">⇦</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, between, maxLength} from 'vuelidate/lib/validators'

export default {
  name: "AppCreateForm",
  mixins: [validationMixin],
  data() {
    return {
      book: {
        title: "",
        year: "",
        isbn: "",
        author: "",
        language: "",
        genre: ""
      },
    };
  },
  validations: {
    book: {
      title: {required, minLength: minLength(6)},
      year: {required, between: between(1900, 2023)},
      isbn: {required, minLength: minLength(13), maxLength: maxLength(13)},
    }
  },
  methods: {
    addBook() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }
      this.$emit("create", {...this.book});

      this.book.title = "";
      this.book.year = "";
      this.book.isbn = "";
      this.book.author = "";
      this.book.language = "";
      this.book.genre = "";
    },
    closeForm() {
      this.$emit("close"); // Эмитируйте событие "close" для уведомления компонента-родителя о закрытии формы
      this.$v.$reset(); // Сброс состояния валидации при закрытии формы
      this.book = {
        title: "",
        year: "",
        isbn: "",
        author: "",
        language: "",
        genre: ""
      };
    }

  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.close-button {
  position: absolute;
  top: 21px;
  right: 20px;
  width: 30px;
  height: 30px;
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

.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  z-index: 0;
  min-height: 40vh;
}

.wrapper {
  position: relative;
  width: 500px;
  height: 650px;
  box-shadow: 0 0 50px #00eeff;
  border-radius: 60px;
  padding: 40px;
  background: black;
}

.wrapper:hover {
  animation: animate 3s linear infinite;
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}

.form-wrapper-sign-in {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

h2 {
  font-size: 30px;
  color: white;
  text-align: center;
}

.input-group {
  position: relative;
  margin: 30px 0;
  border-bottom: 2px solid #fff;
}

.input-group label {
  position: absolute;
  top: 30%;
  left: 5px;
  transform: translateY(-130%);
  font-size: 16px;
  color: #fff;
  pointer-events: none;
}

.input-group input {
  width: 320px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  padding: 0 5px;
  background: transparent;
  border: none;
  outline: none;
}

.input-group input:focus ~ label,
.input-group input:hover ~ label {
  top: -1px;
}

.create-button {
  position: relative;
  width: 100%;
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
}
</style>