<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
    <h3>{{ props.card.title }}</h3>
    <p>{{ props.card.text }}</p>
  </div>
</template>

<style scoped>
.card {
  flex: 0 0 auto;
  width: 200px;
  padding: 15px;
  background: #f4f4f4;
  border-radius: 10px;
  text-align: center;
}

.icon {
  font-size: 40px;
  margin-bottom: 10px;
}
</style>
