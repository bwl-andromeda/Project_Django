<template>
    <div class="x-header">
      <strong>Иванов Никита</strong>
      <button class="t-btn" @click="showImage">{{ buttonLabel1 }}</button>
      <div v-if="showPicture">
        <img :src="imagePath" alt="Картинка">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        showPicture: false,
        imagePath: require('@/components/assets/images/images.jpg'),
        buttonLabel1: 'Нажми меня и тебе будет смешно'
      };
    },
    methods: {
      showImage() {
        this.showPicture = true;
        this.imagePath = require('@/components/assets/images/images.jpg');
        this.buttonLabel1 = 'Ха-ха!';
      }
    }
  };
  </script>
  
  <style scoped>
  .x-header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(#9595b6, #5a567f);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  </style>
  