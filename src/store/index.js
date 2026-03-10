import { defineStore } from 'pinia';
import { ref } from 'vue';

export const routerLinkLine = defineStore('routerLinkLine', () => {
  const activeLine = ref('home');

  function setActive(name) {
    activeLine.value = name;
    console.log(name);
  }
  return {
    activeLine,
    setActive,
  };
});
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
  ]);

  const getRandomAchievements = () => {
    const shuffled = [...achievements.value].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  };

  const getAchievementById = (id) => {
    return achievements.value.find((a) => a.id === id);
  };

  return {
    achievements,
    getRandomAchievements,
    getAchievementById,
  };
});

export const useCourseStore = defineStore('course', () => {
  const courses = ref({
    course1: {
      id: 1,
      title: 'Course 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      teacher: 'John Doe',
    },
    course2: {
      id: 2,
      title: 'Course 2',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      teacher: 'Jane Smith',
    },
    course3: {
      id: 3,
      title: 'Course 3',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      teacher: 'Alice Johnson',
    },
    course4: {
      id: 4,
      title: 'Course 4',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      teacher: 'Bob Wilson',
    },
    course5: {
      id: 5,
      title: 'Course 5',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      teacher: 'Emma Brown',
    },
    course6: {
      id: 6,
      title: 'Course 6',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
      teacher: 'Michael Davis',
    },
  });

  const contactData = ref(null);

  const setCourseById = (id) => {
    contactData.value = id
    console.log(id);
    
  };

  const getCourseById = (id) => {
    return courses.value[`course${id}`];
  };

  return {
    courses,
    setCourseById,
    getCourseById,
    contactData,
  };
});
