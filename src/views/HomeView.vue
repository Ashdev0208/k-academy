<script setup>
import Carousel from '@/components/carousel.vue'
import CourseCard from '@/components/CourseCard.vue'
import { ref, defineOptions } from 'vue'
import achievementCard from '@/components/achievementCard.vue'
import { useAchievementStore } from '@/store'
import { RouterLink } from 'vue-router'

const achievements = useAchievementStore().getRandomAchievements()

defineOptions({
  name: 'home',
})

const sliderImgs = ref([
  'https://img.freepik.com/free-photo/auto-repairman-talking-phone-while-using-laptop-workshop_637285-9761.jpg?t=st=1770787580~exp=1770791180~hmac=4ae2e48d4c244d5226c9dda920fc131f25df5e3e857811450613a3ab3882a61b',
  'https://img.freepik.com/free-photo/repairman-looks-online-new-car-parts_482257-76170.jpg?t=st=1770787702~exp=1770791302~hmac=fa167e3b44c2a3efe0e237e944e4f588393a70c94b2cc55f5d62aa0d48db19d7',
  'https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg?t=st=1770787798~exp=1770791398~hmac=4ec866cc0a87aa4eea1c4445abc3beac6d4349e1651148398d0009fb32534197',
])
const cards = [
  { title: 'User 1', text: 'Lorem ipsum dolor sit amet.' },
  { title: 'User 2', text: 'Dolores saepe optio exercitationem.' },
  { title: 'User 3', text: 'Sapiente culpa nulla adipisci.' },
  { title: 'User 4', text: 'Reprehenderit minus doloremque.' },
]

const courses = [
  {
    title: 'Logo Design',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    teacher: 'someBody',
  },
  {
    title: 'Typography',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    teacher: 'someBody',
  },
  {
    title: 'Logo Design',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    teacher: 'someBody',
  },
  {
    title: 'Typography',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    teacher: 'someBody',
  },
  {
    title: 'Brand Identity',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    teacher: 'someBody',
  },
  {
    title: 'Figma Essentials',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    teacher: 'someBody',
  },
]
</script>

<template>
  <main class="container banner" id="home">
    <div class="banner-content">
      <div class="slider-wrapper">
        <div class="slider-img">
          <img
            v-for="(img, index) in sliderImgs"
            :key="index"
            :src="img"
            :alt="`Slider image ${index + 1}`"
          />
        </div>
        <ul class="slider-dots row item-center">
          <li v-for="item in cards" :key="item" :titl="item.title" :text="item.text"></li>
        </ul>
      </div>
    </div>
  </main>
  <section class="service" id="services">
    <div class="service-info">
      <h2 class="section-title">Our Services</h2>
      <p class="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odio earum, eveniet recusandae
        voluptatibus corrupti exercitationem natus, magni, quo magnam dicta fuga iusto tempora ipsum
        itaque dignissimos! Provident, dignissimos quidem.
      </p>
    </div>
  </section>
  <div class="service-carousel">
    <Carousel></Carousel>
  </div>
  <section id="courses" class="courses-info container row jc-sb" style="gap: 20px">
    <div class="courses-info">
      <h2 class="section-title">Our Courses</h2>
      <p class="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odio earum, eveniet recusandae
        voluptatibus corrupti exercitationem natus, magni, quo magnam dicta fuga iusto tempora ipsum
        itaque dignissimos! Provident, dignissimos quidem.
      </p>
    </div>
    <CourseCard
      v-for="(course, id) in courses"
      :v-for="id"
      :title="course.title"
      :desc="course.text"
      :teacher="course.teacher"
    ></CourseCard>
  </section>
  <section class="achievements container" id="achievements">
    <div class="achievement-info">
      <h2 class="section-title">Our Achievements</h2>
      <p class="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odio earum, eveniet recusandae
        voluptatibus corrupti exercitationem natus, magni, quo magnam dicta fuga iusto tempora ipsum
        itaque dignissimos! Provident, dignissimos quidem.
      </p>
    </div>
    <div class="achievement-wrapper row jc-sb">
      <achievementCard
        class="achievementCard"
        v-for="achievement in achievements"
        :key="achievement.id"
        :title="achievement.title"
        :description="achievement.disc"
        :image="achievement.pic"
      />
    </div>
    <div class="primary-btn">
      <routerLink class="btn">View All</routerLink>
    </div>
  </section>
</template>

<style>
.banner {
  margin: 3rem auto 0 auto;
  height: 630px;
}

.banner-content {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider-wrapper .slider-img {
  display: flex;
  width: 300%;
  height: 630px;
  flex-wrap: nowrap;
  transition: all 0.5s ease-in-out;
}

.slider-wrapper .slider-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  gap: 1rem;
  z-index: 10;
}

.slider-dots li::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0rem;
  height: 0rem;
  background: #ffffff;
  transition: 0.4s ease-in-out all;
  border-radius: 50%;
}

.slider-dots li.active::after {
  width: 1.1rem;
  height: 1.1rem;
}
.slider-dots li {
  width: 1.1rem;
  height: 1.1rem;
  background: #000000;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

.service-info {
  margin: 0rem auto 2rem auto;
  text-align: center;
}

.carousel-parent {
  width: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 10px;
}
.service-info {
  width: 100%;
}

.achievementCard {
  width: 30%;
  margin: 1rem 0;
}

.achievements .primary-btn {
  margin: 1rem auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

.achievements .primary-btn .btn {
  background: #0084ff;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1.3rem;
}
</style>
