<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'
import { routerLinkLine } from '@/store'
const setActive = (name) => routerLinkLine().setActive(name)
const activeLink = computed(() => routerLinkLine().activeLine)
const isMobileMenuOpen = ref(false);
const cloneBtns = document.querySelectorAll('.primary-btn .btn');


const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const resolution = ref(window.innerWidth);
window.addEventListener('resize', () => {
  resolution.value = window.innerWidth;
});
</script>

<template>
  <div class="navbar" id="home">
    <div class="wrapper">
      <nav class="row item-center">
        <div class="logo">
          <RouterLink to="/#home" class="link" @click="closeMobileMenu">K-ACADEMY</RouterLink>
        </div>
        <ul class="row links">
          <RouterLink
            to="/#home"
            @click="setActive('home')"
            :class="{ active: activeLink === 'home' }"
            class="link"
            >Home</RouterLink
          >
          <RouterLink
            to="/#services"
            @click="setActive('services')"
            :class="{ active: activeLink === 'services' }"
            class="link"
            >Service</RouterLink
          >
          <RouterLink
            to="/#achievements"
            @click="setActive('achievements')"
            :class="{ active: activeLink === 'achievements' }"
            class="link"
            >Achievements</RouterLink
          >
          <RouterLink
            to="/#courses"
            @click="setActive('courses')"
            :class="{ active: activeLink === 'courses' }"
            class="link"
            >Courses</RouterLink
          >
        </ul>
        <div class="burger-btn">
          <button class="hamburger" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="primary-btn nav-btns">
          <div class="btn" :class="{ active: activeLink === 'contact' }">
            <i class="fa-brands fa-telegram"></i>
            <RouterLink :to="{ name: 'contact' }" @click="setActive('contact')" class="btn"
              >Contact</RouterLink
            >
          </div>
          <div class="btn" :class="{ active: activeLink === 'consulting' }">
            <i class="fa-brands fa-telegram"></i>
            <RouterLink :to="{ name: 'consulting' }" @click="setActive('consulting')" class="btn"
              >Consulting</RouterLink
            >
          </div>
        </div>
      </nav>
      <div class="mobile-menu" v-if="isMobileMenuOpen">
        <RouterLink
          to="/#home"
          @click="setActive('home'); closeMobileMenu()"
          :class="{ active: activeLink === 'home' }"
          class="mobile-link"
          >Home</RouterLink
        >
        <RouterLink
          to="/#services"
          @click="setActive('services'); closeMobileMenu()"
          :class="{ active: activeLink === 'services' }"
          class="mobile-link"
          >Service</RouterLink
        >
        <RouterLink
          to="/#achievements"
          @click="setActive('achievements'); closeMobileMenu()"
          :class="{ active: activeLink === 'achievements' }"
          class="mobile-link"
          >Achievements</RouterLink
        >
        <RouterLink
          to="/#courses"
          @click="setActive('courses'); closeMobileMenu()"
          :class="{ active: activeLink === 'courses' }"
          class="mobile-link"
          >Courses</RouterLink
        >
       <div class="primary-btn row ai-c jc-sb" style="text-align:center;padding:0.5rem 0;" v-if="resolution <= 480">
         <RouterLink :to="{ name: 'contact' }" @click="setActive('contact'); closeMobileMenu()" class=" btn">Contact</RouterLink>
        <RouterLink :to="{ name: 'consulting' }" @click="setActive('consulting'); closeMobileMenu()" class=" btn">Consulting</RouterLink>
       </div>
      </div>
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
.burger-btn {
  display: none;
}

.primary-btn .btn.active, .primary-btn .btn.active a {
  background: #0084ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.primary-btn .burger {
  background: #0084ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}
.nav-btns {
  display: flex;
  align-items: center;
  gap: 5px;
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 5px;
  padding: 0.5rem;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #0084ff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(3px, 10px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(2px, -9px);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: #fff;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 99;
}

.mobile-menu .btn{
  width: 45%;
}

.mobile-link {
  color: #0084ff;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.mobile-link:hover,
.mobile-link.active {
  background: #0084ff;
  color: #fff;
}

@media (max-width: 991px) {
  .links {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
  .hamburger {
    display: flex;
  }
  nav {
    width: 95%;
  }
  .nav-btns {
    gap: 10px;
  }
  .primary-btn .btn {
    padding: .8rem 0.8rem;
    font-size: 0.8rem;
  }
  .mobile-menu {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar {
    height: 70px;
  }
  .wrapper {
    height: 70px;
  }
  nav {
    height: 70px;
  }
  .logo {
    font-size: 1rem;
  }
  .nav-btns {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
  .hamburger {
    display: flex;
  }
  .mobile-menu {
    top: 70px;
  }
}

</style>
