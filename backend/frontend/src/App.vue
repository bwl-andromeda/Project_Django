<template>
  <router-view></router-view>
</template>


<script>
import AppHeaders from "@/components/AppHeaders.vue";
import AppContent from "@/components/AppContent.vue";

export default {
  components: {AppHeaders, AppContent},
  name: 'App'
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body {
  background-color: black;
  color: white;
}
</style>
