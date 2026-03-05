import { defineStore } from 'pinia'
import { ref } from 'vue'

export const routerLinkLine = defineStore('routerLinkLine', () => {
  const activeLine = ref('home')

  function setActive(name) {
    activeLine.value = name
    console.log(name)
  }
  return {
    activeLine,
    setActive,
  }
})
export const useAchievementStore = defineStore('achievement', () => {
  const achievements = ref([
    {
      id: 1,
      pic: 'https://via.placeholder.com/100?text=First+Steps',
      title: 'First Steps',
      disc: 'Complete your first task',
    },
    {
      id: 2,
      pic: 'https://via.placeholder.com/100?text=Speed+Runner',
      title: 'Speed Runner',
      disc: 'Complete 10 tasks in one day',
    },
    {
      id: 3,
      pic: 'https://via.placeholder.com/100?text=Master',
      title: 'Master',
      disc: 'Complete 100 tasks',
    },
    {
      id: 4,
      pic: 'https://via.placeholder.com/100?text=First+Steps',
      title: 'First Steps',
      disc: 'Complete your first task',
    },
    {
      id: 5,
      pic: 'https://via.placeholder.com/100?text=Speed+Runner',
      title: 'Speed Runner',
      disc: 'Complete 10 tasks in one day',
    },
    {
      id: 6,
      pic: 'https://via.placeholder.com/100?text=Master',
      title: 'Master',
      disc: 'Complete 100 tasks',
    },
    {
      id: 7,
      pic: 'https://via.placeholder.com/100?text=First+Steps',
      title: 'First Steps',
      disc: 'Complete your first task',
    },
    {
      id: 8,
      pic: 'https://via.placeholder.com/100?text=Speed+Runner',
      title: 'Speed Runner',
      disc: 'Complete 10 tasks in one day',
    },
    {
      id: 9,
      pic: 'https://via.placeholder.com/100?text=Master',
      title: 'Master',
      disc: 'Complete 100 tasks',
    },
  ])

  const getRandomAchievements = () => {
    const shuffled = [...achievements.value].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 6)
  }

  const getAchievementById = (id) => {
    return achievements.value.find((a) => a.id === id)
  }

  return {
    achievements,
    getRandomAchievements,
    getAchievementById,
  }
})
