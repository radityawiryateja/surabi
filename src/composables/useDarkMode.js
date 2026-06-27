// src/composables/useDarkMode.js
// Singleton pattern: satu ref di-share ke semua komponen yang menggunakannya.
import { ref, watch } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

watch(isDark, (val) => {
  if (val) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
})

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
  }
  return { isDark, toggle }
}
