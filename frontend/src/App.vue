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
  components: {AppHeaders, AppContent},
  name: 'App',
  data() {
    return {}
  }
}
</script>
