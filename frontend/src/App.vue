<template>
  <div class="t-main-block">
    <AppHeaders></AppHeaders>
    <AppContent></AppContent>
  </div>
</template>


<script>
import AppHeaders from "@/components/AppHeaders.vue";
import AppContent from "@/components/AppContent.vue";
export default {
  components: { AppHeaders,AppContent },
  name: 'App',
  data() {
      return {}
  }
}
</script>

<style>
.t-btn {
        margin-left: 10px;
        background-color: rgb(213, 207, 207);
        color: black;
        border-radius: 5px;
        padding: 5px 10px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0,  0.2);
    }
    
</style>
