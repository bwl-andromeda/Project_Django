<template>
  <div>
    <div class="x-header">
      <strong style = 'margin: 0.1px auto'>Иванов Никита</strong>
      - Привет! Как жизнь у тебя?
      - Жизнь у меня хорошая, даже с элементом роскоши.
      - Это как?
      - Ну каждый день новый пакетик чая!
      <x-button style="background-color: red; border: 0.5px red">Выход</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style scoped>
.x-header {
   padding: 5px;
   margin: 10px auto;
   max-height: 30px;
   display: flex;
   justify-content: center;
   border-radius: 10px;
   background: white;
   box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
}
</style>