<template>
  <section>
    <div class="login-box">
      <form @submit.prevent>
        <h2>Вход</h2>
        <div class="input-box">
          <input required v-model="username"/>
          <label>Имя пользователя</label>
        </div>
        <div class="input-box">
          <input type="password" required v-model="password"/>
          <label> Пароль </label>
        </div>
        <button @click="login"> Войти</button>
      </form>
    </div>
  </section>
</template>

<script>
export default ({
  name: "LoginPage",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$ajax.post('api-token-auth/',{
      username: this.username,
      password: this.password,
      }).then(responce=> {
        const token = responce.data.token;
        localStorage.setItem('token', token);

        this.$router.push({name: 'Home'});
      })
    }
  }
})
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url('bg.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  animation: animateBg 10s linear infinite;
}

@keyframes animateBg {
  100% {
    filter: hue-rotate(360deg);
  }
}

.login-box {
  position: relative;
  width: 400px;
  height: 400px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 2em;
  color: white;
  text-align: center;
}

.input-box {
  position: relative;
  width: 310px;
  margin: 30px 0;
  border-bottom: 2px solid white;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 0.8em;
  color: white;
  pointer-events: none;
  transition: .5s;
}

.input-box input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: white;
  padding: 0 35px 0 5px;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -5px
}

button {
  width: 100%;
  height: 40px;
  background: white;
  border-radius: 40px;
  border: none;
  outline: none;
  font-size: 1em;
  color: black;
  cursor: pointer;
  font-weight: 500;
}
</style>