<template>
  <button class="x-btn" v-on="$listeners">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  name: "XButton"
}
</script>
  
<style scoped>
.x-btn {
  border: 0.5px solid #0738fd;
  background-color: #0738fd;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>