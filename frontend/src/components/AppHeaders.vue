<template>
  <div>
    <header>
      <div class="all_header_menu">
        <div class="logo">
          <h1>
            We are coderz!
          </h1>
        </div>
        <div class="t-menu">
          <ul>
            <li><a href=""> Home </a></li>
            <li><a href=""> Анекдоты </a></li>
            <li><button> Exit </button></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style scoped>
button {
  position: relative;
  width: 70px;
  height: 30px;
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
}
button:hover {
  box-shadow: 0 0 15px #0ef;
  transition: 0.5s;
  transform: translateY(5px);
  color: white;
}
@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}
.all_header_menu {
  animation: animate 3s linear infinite;
}

.t-menu li {
  display: inline-block;
}

.logo {
  display: inline-block;
  margin-right: 15px;
}

.t-menu {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

header {
  display: flex;
  justify-content: center;
  z-index: 1;
}

.t-menu a {
  vertical-align: middle;
  font-family: Arial;
  font-size: 15px;
  color: white;
  text-decoration: none;
  margin-right: 25px;
}
.t-menu a:hover {
  cursor: pointer;
  color: aquamarine;
}
.logo h1 {
  margin-right: 10px;
  text-align: left;
  vertical-align: middle;
  font-family: Arial;
  font-size: 30px;
  color: white;
  text-decoration: none;
}
</style>
