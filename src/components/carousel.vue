<script setup>
const cards = [
  {
    title: 'Jahongir',
    icon: 'fa-solid fa-circle-user',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'SHodiyor',
    icon: 'fa-solid fa-circle-user',
    text: 'Dolores saepe optio exercitationem veniam amet aliquam.',
  },
  {
    title: 'Abduqodir aka',
    icon: 'fa-solid fa-circle-user',
    text: 'Sapiente culpa nulla adipisci explicabo, reprehenderit minus.',
  },
  {
    title: 'shoxrux aka',
    icon: 'fa-solid fa-circle-user',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
]
</script>

<template>
  <div class="app">
    <div class="card-list">
      <div class="loop-slider" style="--duration: 10000ms; --direction: normal">
        <div class="inner">
          <!-- Original cards -->
          <div class="card" v-for="(c, i) in cards" :key="i">
            <div class="icon">
              <i :class="c.icon"></i>
            </div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.text }}</p>
          </div>
          <!-- Duplicate cards for seamless loop -->
          <div class="card" v-for="(c, i) in cards" :key="'dup-' + i">
            <div class="icon">
              <i :class="c.icon"></i>
            </div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.text }}</p>
          </div>
        </div>
      </div>
      <div class="fade"></div>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card-list {
  padding: 10px 0;
  overflow: hidden;
  width: 100%;
  position: relative;
}

/* Fade edges */
.fade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, #f9f1fe, transparent 20%, transparent 80%, #f9f1fe);
}

/* Loop slider */
.loop-slider .inner {
  display: flex;
  width: fit-content;
  animation: loop linear infinite;
  animation-direction: var(--direction, normal);
  animation-duration: var(--duration, 50s);
  gap: 1rem;
}

/* Card styling */
.card {
  flex: 0 0 auto;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  width: 400px;
  background: #f9f1fe;
  text-align: center;
}

.card .icon {
  font-size: 4rem;
  color: #262626;
}

.card h3 {
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #262626;
}

/* Keyframes for infinite scroll */
@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Optional: pause on hover */
.loop-slider:hover .inner {
  animation-play-state: paused;
}
</style>
