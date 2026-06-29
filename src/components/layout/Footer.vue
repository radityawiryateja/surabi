<template>
  <footer class="bg-brand-surface dark:bg-brand-surfaceDark pt-12 md:pt-20 pb-6 md:pb-8 mt-8 md:mt-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Jarak antar elemen (gap) dan batas bawah (mb) diperkecil untuk HP -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">

        <!-- Brand + tagline (Dikembalikan Rata Kiri) -->
        <div class="lg:col-span-5">
          <a
            href="#beranda"
            class="font-serif font-bold text-xl md:text-2xl text-brand-primary dark:text-brand-primaryDark flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6"
            @click.prevent="scrollTo('beranda')"
          >
            <div class="w-8 h-8 md:w-10 md:h-10 text-white dark:text-brand-dark rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src="https://nzmzljgowwpbnyjqdnvy.supabase.co/storage/v1/object/public/Surabi/Ellipse%201.png" 
                alt="Menu"
                class="w-7 h-7 object-contain"
                />
            </div>
            Surabi Lembur
          </a>
          <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed pr-2 md:pr-4">
            Sajian Autentik Pedesaan. Menikmati kelezatan murni dari resep tradisional
            dengan suasana hangat yang selalu mengingatkan pada rumah.
          </p>
        </div>

        <!-- Tautan (Dikembalikan Rata Kiri) -->
        <div class="lg:col-span-3 lg:col-start-7">
          <h4 class="font-bold text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 text-brand-primary dark:text-white">
            Tautan
          </h4>
          <ul class="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
            <li v-for="link in footerLinks" :key="link.id">
              <a
                :href="`#${link.id}`"
                class="hover:text-brand-primary dark:hover:text-brand-primaryDark hover:translate-x-1 inline-block transition-transform"
                @click.prevent="scrollTo(link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Jam Operasional -->
        <div class="lg:col-span-3">
          <h4 class="font-bold text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 text-brand-primary dark:text-white">
            Operasional
          </h4>
          <ul class="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <li
              v-for="jam in jamOperasional"
              :key="jam.label"
              class="flex justify-between items-center"
            >
              <span>{{ jam.label }}</span>
              <span class="bg-[#EBE4D8] dark:bg-black/30 px-2.5 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-brand-primary dark:text-brand-primaryDark">
                {{ jam.waktu }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-[10px] md:text-sm text-gray-500 dark:text-gray-400 font-medium">
        &copy; 2026 Surabi Lembur. Sajian Autentik Pedesaan
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'

const scrollTo = inject('scrollTo')

const footerLinks = [
  { id: 'beranda',     label: 'Beranda' },
  { id: 'lokasi',      label: 'Lokasi' },
  { id: 'menu',        label: 'Menu' },
  { id: 'tentang',     label: 'Tentang Kami' },
  { id: 'testimonial', label: 'Testimonial' },
]

const jamOperasional = [
  { label: 'Surabi Sarapan',   waktu: '05:00 - 09:00' },
  { label: 'Surabi Nongkrong', waktu: '14:00 - 22:00' },
]
</script>
