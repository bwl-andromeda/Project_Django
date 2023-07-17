<template>
  <router-view></router-view>
</template>


<script>
import AppHeaders from "@/components/AppHeaders.vue";
import AppContent from "@/components/AppContent.vue";
import axios from "axios"

export default {
  components: {AppHeaders, AppContent},
  name: 'App',
  data() {
    return {}
  },
  beforeCreate() {
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    }
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
