<template>
  <div>
    <div class="main-block">
      <AppHeaders></AppHeaders>
      <AppContent></AppContent>
    </div>
  </div>
</template>

<script>
import AppHeaders from "@/components/AppHeaders.vue";
import AppContent from "@/components/AppContent.vue";
import App from "@/App.vue";

export default {
  components: {App, AppHeaders, AppContent},
  name: "Home",
}
</script>

<style scoped></style>