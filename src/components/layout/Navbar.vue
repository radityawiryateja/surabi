<template>
  <header
    class="fixed w-full top-0 z-40 bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-500"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between relative"
    >
      <!-- Hamburger (mobile only) -->
      <button
        class="md:hidden text-brand-primary dark:text-brand-primaryDark text-2xl p-2 -ml-2 focus:outline-none z-10 relative"
        aria-label="Buka menu"
        @click="$emit('open-sidebar')"
      >
        <i class="ph ph-list"></i>
      </button>

      <!-- Logo: absolute-centered on mobile, static on desktop -->
      <a
        href="#beranda"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:transform-none font-serif font-bold text-xl md:text-2xl text-brand-primary dark:text-brand-primaryDark flex items-center gap-2 z-0 whitespace-nowrap"
        @click.prevent="scrollTo('beranda')"
      >
        <div
          class="w-8 h-8 md:w-10 md:h-10 text-white dark:text-brand-dark rounded-full flex items-center justify-center"
          >
          <img
            src="https://nzmzljgowwpbnyjqdnvy.supabase.co/storage/v1/object/public/Surabi/Ellipse%201.png" 
            alt="Menu"
            class="w-7 h-7 object-contain"
            />
        </div>
        Surabi Lembur
      </a>

      <!-- Desktop nav links -->
      <nav class="hidden md:flex items-center gap-8 font-medium">
        <NavLink v-for="link in navLinks" :key="link.id" :link="link" />
      </nav>

      <!-- Right actions -->
      <div class="flex items-center gap-3 md:gap-4 z-10 ml-auto md:ml-0">
        <!-- Dark mode toggle -->
        <button
          class="text-xl md:text-2xl p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle tema gelap"
          @click="toggleDark"
        >
          <i v-if="!isDark" class="ph ph-moon"></i>
          <i v-else class="ph ph-sun text-yellow-400"></i>
        </button>

        <!-- CTA -->
        <a
          href="#menu"
          class="hidden lg:flex bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          @click.prevent="scrollTo('menu')"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode.js'

const { isDark, toggle: toggleDark } = useDarkMode()
const scrollTo = inject('scrollTo')

const navLinks = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'menu',    label: 'Menu' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'kontak',  label: 'Hubungi Kami' },
]

defineEmits(['open-sidebar'])
</script>

<script>
// NavLink as a local sub-component to keep file self-contained
import { inject as _inject, defineComponent, h } from 'vue'

const NavLink = defineComponent({
  props: { link: Object },
  setup(props) {
    const scrollTo = _inject('scrollTo')
    return () =>
      h(
        'a',
        {
          href: `#${props.link.id}`,
          class:
            'hover:text-brand-primary dark:hover:text-white transition cursor-pointer',
          onClick: (e) => {
            e.preventDefault()
            scrollTo(props.link.id)
          },
        },
        props.link.label
      )
  },
})
export default { components: { NavLink } }
</script>
