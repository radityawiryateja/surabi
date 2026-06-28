<template>
  <section id="testimonial" class="bg-brand-surface dark:bg-brand-surfaceDark py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading + Global Rating Badge -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-brand-primary dark:text-white mb-6">
          Kata Mereka
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg">
          Merasakan kehangatan tradisi melalui setiap gigitan. Inilah cerita dari
          keluarga besar penikmat sajian autentik Surabi Lembur.
        </p>

        <!-- Global Rating Badge — ada di HTML referensi, hilang di Vue sebelumnya -->
        <div
          class="inline-flex flex-col items-center justify-center mt-8 bg-brand-light dark:bg-brand-dark px-8 py-4 rounded-4xl shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div class="flex text-brand-accent text-2xl gap-1 mb-2">
            <i v-for="s in 5" :key="s" class="ph-fill ph-star"></i>
          </div>
          <p class="font-serif text-2xl font-bold text-brand-primary dark:text-white">
            4.9
            <span class="text-sm font-sans text-gray-500 font-normal">/ 5 (1000+ Ulasan)</span>
          </p>
        </div>
      </div>

      <!-- Review Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="review.name"
          class="bg-brand-light dark:bg-brand-dark p-8 md:p-10 rounded-4xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="flex text-brand-accent mb-6 text-sm gap-1">
            <i v-for="s in 5" :key="s" class="ph-fill ph-star"></i>
          </div>
          <p class="italic text-gray-600 dark:text-gray-300 mb-10 leading-relaxed flex-grow">
            "{{ review.quote }}"
          </p>
          <div class="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
            <img
              :src="review.avatar"
              :alt="review.name"
              class="w-14 h-14 rounded-full object-cover shadow-sm"
            />
            <div>
              <h4 class="font-bold text-brand-primary dark:text-white text-base">{{ review.name }}</h4>
              <p class="text-sm text-gray-500">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Bagikan Pengalaman — ada di HTML referensi, hilang di Vue sebelumnya -->
      <div
        class="mt-16 bg-[#EBE4D8] dark:bg-[#342D28] rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-inner"
        data-aos="zoom-in"
      >
        <h3 class="font-serif text-3xl md:text-4xl font-bold text-brand-primary dark:text-white mb-6">
          Bagikan Pengalaman Anda
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg">
          Komentar dan masukan Anda adalah bumbu rahasia kami untuk terus bertumbuh.
          Ceritakan momen manis Anda bersama sajian hangat kami.
        </p>
        <button
          class="bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark px-10 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          @click="openWhatsApp"
        >
          TULIS ULASAN
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    quote: 'Rasa autentik yang langsung mengingatkan saya pada masa kecil di kampung halaman. Teksturnya sangat lembut, pinggirannya renyah sempurna, dan topping oncomnya juara. Suasana tempatnya juga sangat hangat.',
    name: 'Andini Kusuma',
    role: 'Penikmat Setia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote: 'Presentasi makanannya sangat elegan untuk ukuran jajanan tradisional. Surabi kinca duriannya benar-benar lumer di mulut. Pelayanan sangat ramah, staf selalu memastikan kita nyaman. Pengalaman kuliner yang berkelas.',
    name: 'Budi Santoso',
    role: 'Kritikus Makanan Lokal',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote: 'Sering mampir ke sini sepulang kerja untuk bersantai. Aroma tungku tanah liat yang khas selalu berhasil meredakan lelah. Packaging take-away nya juga sangat rapi dan eksklusif. Sangat direkomendasikan!',
    name: 'Siti Aminah',
    role: 'Pecinta Kuliner Tradisional',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150',
  },
]

function openWhatsApp() {
  window.open('https://wa.me/6281234567890?text=Halo%20Surabi%20Lembur!%20Saya%20ingin%20berbagi%20ulasan.', '_blank')
}
</script>
