<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const activeSection = ref('home')

function setActive(name) {
  activeSection.value = name
}
</script>

<template>
  <div class="navbar">
    <div class="wrapper">
      <nav class="row item-center">
        <div class="logo">
          <RouterLink :to="{ name: 'home' }" class="link">K-ACADEMY</RouterLink>
        </div>
        <ul class="row links">
          <RouterLink
            :to="{ name: 'home' }"
            :class="{ active: activeSection === 'home' }"
            @click="setActive('home')"
            >Home</RouterLink
          >
          <RouterLink
            to="/#services"
            :class="{ active: activeSection === 'services' }"
            @click="setActive('services')"
            >Service</RouterLink
          >
          <RouterLink
            to="/#achievements"
            :class="{ active: activeSection === 'achievements' }"
            @click="setActive('achievements')"
            class="link"
            >Achievements</RouterLink
          >
          <RouterLink
            to="/#courses"
            :class="{ active: activeSection === 'courses' }"
            @click="setActive('courses')"
            class="link"
            >Courses</RouterLink
          >
          <RouterLink
            to="/#testimonials"
            :class="{ active: activeSection === 'testimonials' }"
            @click="setActive('testimonials')"
            class="link"
            >Testimonials</RouterLink
          >
        </ul>
        <div class="burger-btn primary-btn">
          <button class="fa-brands fa-telegram btn burger"></button>
        </div>
        <div class="primary-btn nav-btns">
          <div class="btn">
            <i class="fa-brands fa-telegram"></i>
            <RouterLink :to="{ name: 'contact' }" class="btn">Contact</RouterLink>
          </div>
          <div class="btn">
            <i class="fa-brands fa-telegram"></i>
            <RouterLink :to="{ name: 'consulting' }" class="btn">Consulting</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 80px;
}
.wrapper {
  width: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  height: 80px;
  position: fixed;
  top: 0px;
}
nav {
  justify-content: space-between;
  height: 80px;

  margin: 0 auto;
  width: 90%;
  border-radius: 0 0 30px 30px;
}
.logo {
  font-size: 1.2rem;
  font-weight: 600;
}
nav > ul {
  gap: 20px;
}
.links a {
  font-size: 1rem;
  color: #0084ff;
}
a.active {
  color: #5f44e4;
  border-bottom: 2px solid #0084ff;
  padding-bottom: 0.3rem;
}
.primary-btn .burger {
  background: #0084ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  display: none;
}
.nav-btns {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Tablet and mobile styles */
@media (max-width: 900px) {
  nav {
    width: 95%;
  }

  nav > ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    gap: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  nav > ul.active {
    display: flex;
  }

  .primary-btn .burger {
    display: block;
  }

  .links a {
    display: block;
    padding: 10px 0;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 1rem;
  }

  nav > ul {
    gap: 5px;
  }

  .primary-btn {
    display: none;
  }
}
</style>
