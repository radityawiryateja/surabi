<template>
  <section id="testimonial" class="bg-brand-surface dark:bg-brand-surfaceDark py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading -->
      <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16" data-aos="fade-up">
        <h2
          class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary dark:text-white mb-4 md:mb-6"
        >
          Kata Mereka
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm md:text-lg">
          Merasakan kehangatan tradisi melalui setiap gigitan. Inilah cerita dari
          keluarga besar penikmat sajian autentik Surabi Lembur.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="review.name"
          class="bg-brand-light dark:bg-brand-dark p-6 md:p-10 rounded-3xl md:rounded-4xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Stars -->
          <div class="flex text-brand-accent mb-4 md:mb-6 text-sm gap-1">
            <i v-for="s in 5" :key="s" class="ph-fill ph-star"></i>
          </div>

          <!-- Quote -->
          <p class="italic text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-10 leading-relaxed flex-grow">
            "{{ review.quote }}"
          </p>

          <!-- Author -->
          <div
            class="flex items-center gap-3 md:gap-4 border-t border-gray-100 dark:border-gray-800 pt-4 md:pt-6"
          >
            <img
              :src="review.avatar"
              :alt="review.name"
              class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-sm"
            />
            <div>
              <h4 class="font-bold text-brand-primary dark:text-white text-sm md:text-base">
                {{ review.name }}
              </h4>
              <p class="text-[10px] md:text-sm text-gray-500">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    quote:
      'Rasa autentik yang langsung mengingatkan saya pada masa kecil di kampung halaman. Teksturnya sangat lembut, pinggirannya renyah sempurna.',
    name: 'Andini Kusuma',
    role: 'Penikmat Setia',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote:
      'Presentasi makanannya sangat elegan untuk ukuran jajanan tradisional. Surabi kinca duriannya benar-benar lumer di mulut. Kelas!',
    name: 'Budi Santoso',
    role: 'Kritikus Makanan Lokal',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote:
      'Sering mampir ke sini sepulang kerja untuk bersantai. Aroma tungku tanah liat yang khas selalu berhasil meredakan lelah.',
    name: 'Siti Aminah',
    role: 'Pecinta Kuliner',
    avatar:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150',
  },
]
</script>
