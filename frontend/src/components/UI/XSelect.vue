<template>
  <select :value="value" @change="$emit('input', $event.target.value)">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "XSelect",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.x-select {
   width: 100%;
   padding: 5px;
   border: 1px solid #bdbdbd;
   font-size: 16px;
   border-radius: 5px;
   outline: 0;
   margin-bottom: 10px;
}

.x-select:focus {
   border-color: #bdbdbd;
   box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
}
</style>