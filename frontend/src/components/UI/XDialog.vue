<template>
  <div class="x-dialog" v-if="value === true" @click="$emit('input', false)">
    <div class="x-dialog--content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XDialog",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.x-dialog {
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   display: flex;
}

.x-dialog--content {
   margin: auto;
   background: white;
   border-radius: 20px;
   min-height: 10px;
   min-width: 300px;
   padding: 20px;
}

</style>