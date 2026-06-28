<template>
  <footer class="bg-brand-surface dark:bg-brand-surfaceDark pt-20 pb-8 mt-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

        <!-- Brand + tagline -->
        <div class="lg:col-span-5">
          <a
            href="#beranda"
            class="font-serif font-bold text-2xl text-brand-primary dark:text-brand-primaryDark flex items-center gap-3 mb-6"
            @click.prevent="scrollTo('beranda')"
          >
            <div class="w-10 h-10 bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark rounded-full flex items-center justify-center">
              <i class="ph-fill ph-cooking-pot text-xl"></i>
            </div>
            Surabi Lembur
          </a>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pr-4">
            Sajian Autentik Pedesaan. Menikmati kelezatan murni dari resep tradisional
            dengan suasana hangat yang selalu mengingatkan pada rumah.
          </p>
        </div>

        <!-- Tautan -->
        <div class="lg:col-span-3 lg:col-start-7">
          <h4 class="font-bold text-sm tracking-widest uppercase mb-6 text-brand-primary dark:text-white">
            Tautan
          </h4>
          <ul class="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
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

        <!-- Jam Operasional — ada di HTML referensi, hilang di Vue sebelumnya -->
        <div class="lg:col-span-3">
          <h4 class="font-bold text-sm tracking-widest uppercase mb-6 text-brand-primary dark:text-white">
            Operasional
          </h4>
          <ul class="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li
              v-for="jam in jamOperasional"
              :key="jam.label"
              class="flex justify-between items-center"
            >
              <span>{{ jam.label }}</span>
              <span class="bg-[#EBE4D8] dark:bg-black/30 px-3 py-1 rounded-full text-xs font-bold text-brand-primary dark:text-brand-primaryDark">
                {{ jam.waktu }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 font-medium">
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
  { id: 'kontak',      label: 'Lokasi' },
  { id: 'menu',        label: 'Menu' },
  { id: 'tentang',     label: 'Tentang Kami' },
  { id: 'testimonial', label: 'Testimonial' },
]

const jamOperasional = [
  { label: 'Surabi Sarapan',   waktu: '05:00 - 09:00' },
  { label: 'Surabi Nongkrong', waktu: '14:00 - 22:00' },
]
</script>
