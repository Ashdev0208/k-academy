<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { useCourseStore } from '@/store';
const courseStore = useCourseStore();
const setCourse = id => {
  courseStore.setCourseById(id);
}
const props = defineProps({
  title: String,
  desc: String,
  teacher: String,
  id: {
    type: Number,
  },
  required: true,
})
</script>
<template>
  <div class="card">
    <div class="card-title row js-sb">
      <div class="title-logo"><i class="fa fa-user"></i></div>
      <div class="title-content">
        <div class="title">
          {{ teacher }}
        </div>
        <div class="desc">
          <p>{{ title }}</p>
        </div>
      </div>
    </div>
    <div class="card-desc">
      <p>{{ id }}</p>
    </div>
    <div class="primary-btn">
      <routerLink class="btn" :to="{ name: 'contact' }" @click='setCourse(id)'>book appointment</routerLink>
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  background: #f9f1fe;
  text-align: center;
  width: 32%;
}

.card-title {
  gap: 0.5rem;
  align-items: center;
}

.title-content .title {
  font-size: 1.1rem;
  font-weight: bold;
}

.title-logo {
  padding: 1rem 0.8rem;
  border: 2px solid rgb(255, 71, 249);
  border-radius: 50%;
}

.title-logo i {
  font-size: 2rem;
}

.title-content {
  text-align: left;
}

.card-desc{
    padding: 1rem 0;
    line-height: 17px;
}
</style>
