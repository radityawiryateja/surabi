<template>
  <section
    id="beranda"
    class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden"
  >
    <!-- Text Column -->
    <div
      class="flex-1 space-y-5 md:space-y-8 text-center lg:text-left z-10"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <span
        class="inline-block bg-brand-surface dark:bg-brand-surfaceDark text-brand-primary dark:text-brand-primaryDark text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest border border-brand-primary/10 dark:border-brand-primaryDark/10"
      >
        Sajian Lokal, Sejak 2020
      </span>

      <h1
        class="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-primary dark:text-white"
      >
        Surabi Tradisional dengan Cita Rasa Modern
      </h1>

      <p
        class="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
      >
        Nikmati perpaduan sempurna resep warisan keluarga dan topping kekinian. Dibuat
        segar menggunakan tungku tanah liat untuk menjaga aroma dan rasa
        autentik yang selalu dirindukan.
      </p>

      <div
        class="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4"
      >
        <a
          href="#menu"
          class="w-full sm:w-auto text-center bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark px-6 py-3 md:px-10 md:py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
          @click.prevent="scrollTo('menu')"
        >
          PESAN MENU
        </a>
        <a
          href="#tentang"
          class="w-full sm:w-auto text-center border-2 border-brand-primary dark:border-brand-primaryDark text-brand-primary dark:text-brand-primaryDark px-6 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primaryDark dark:hover:text-brand-dark transition-all text-sm md:text-base"
          @click.prevent="scrollTo('tentang')"
        >
          TENTANG KAMI
        </a>
      </div>
    </div>

    <!-- Image Column -->
    <div
      class="flex-1 w-full relative mt-4 md:mt-0"
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="200"
    >
      <div
        class="absolute -inset-2 md:-inset-4 bg-brand-primary/5 dark:bg-brand-primaryDark/5 rounded-[2rem] md:rounded-[3rem] transform rotate-3"
      ></div>
      <!-- Rasio gambar di HP diubah menjadi aspect-[4/3] agar lebih pendek dan manis -->
      <div
        class="relative w-full aspect-[4/3] md:aspect-square rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl"
      >
        <img
          src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=80&w=1000"
          alt="Surabi Hangat"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
const scrollTo = inject('scrollTo')
</script>
