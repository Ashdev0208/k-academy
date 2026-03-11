<script setup>
import CarouselCard from '@/components/carousel.vue'
import CourseCard from '@/components/CourseCard.vue'
import { ref, defineOptions } from 'vue'
import achievementCard from '@/components/achievementCard.vue'
import { useAchievementStore, useCourseStore } from '@/store'
import { RouterLink } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
  { id: 0, title: 'User 1', text: 'Lorem ipsum dolor sit amet.' },
  { id: 1, title: 'User 2', text: 'Dolores saepe optio exercitationem.' },
  { id: 2, title: 'User 3', text: 'Sapiente culpa nulla adipisci.' },
  { id: 3, title: 'User 4', text: 'Reprehenderit minus doloremque.' },
]

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true, // Infinite loop
  autoplay: 3000, // 3 seconds
  transition: 400,
}
</script>

<template>
  <main class="container banner">
    <div class="banner-content">
      <div class="slider-wrapper">
        <Carousel v-bind="carouselConfig">
          <Slide v-for="(img, index) in sliderImgs" :key="index">
            <div class="slider-img">
              <img :src="img" :alt="`Slider image ${index + 1}`" />
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
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
    <CarouselCard></CarouselCard>
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
    <div class="courses row jc-sb" style="gap: 20px 0">
      <CourseCard></CourseCard>
    </div>
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
.carousel__item img {
  width: 100%;
  display: block;
}
.carousel {
  --vc-pgn-background-color: #0084ff;
  --vc-pgn-active-color: #8842f0;
  --vc-pgn-border-radius: 50%;
  --vc-pgn-height: 22px;
  --vc-pgn-width: 22px;
}

.banner {
  margin: 2rem auto 0 auto;
  height: 630px;
}

.banner-content {
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
}

.slider-wrapper .slider-img {
  height: 630px;
  width: 100%;
}

.slider-wrapper .slider-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

@media screen and (max-width: 991px) {
  .achievementCard {
    width: 45%;
  }
  .corses-info {
    flex-direction: column;
    align-items: center;
  }
  .courses .card {
    width: 48%;
  }
}

@media screen and (max-width: 700px) {
  .courses .card {
    width: 94%;
    margin: 0 auto;
  }
  .achievementCard {
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
  }
}
</style>
