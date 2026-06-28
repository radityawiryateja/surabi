<template>
  <section id="testimonial" class="bg-brand-surface dark:bg-brand-surfaceDark py-12 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading + Global Rating Badge -->
      <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16" data-aos="fade-up">
        <h2 class="font-serif text-3xl md:text-5xl font-bold text-brand-primary dark:text-white mb-4 md:mb-6">
          Kata Mereka
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base text-center leading-relaxed">
          Dalam setiap gigitan, tradisi kembali bernapas. Surabi Lembur menjadi ruang tempat kenangan, kebersamaan, dan cita rasa autentik berpadu, mengikat setiap penikmatnya dalam satu cerita yang tak lekang oleh waktu.
        </p>

        <!-- Global Rating Badge -->
        <div
          class="inline-flex flex-col items-center justify-center mt-6 md:mt-8 bg-brand-light dark:bg-brand-dark px-6 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-4xl shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div class="flex text-brand-accent text-xl md:text-2xl gap-1 mb-1 md:mb-2">
            <i v-for="s in 5" :key="s" class="ph-fill ph-star"></i>
          </div>
          <p class="font-serif text-xl md:text-2xl font-bold text-brand-primary dark:text-white">
            4.9
            <span class="text-xs md:text-sm font-sans text-gray-500 font-normal">/ 5 (1000+ Ulasan)</span>
          </p>
        </div>
      </div>

      <!-- Review Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="review.name"
          class="bg-brand-light dark:bg-brand-dark p-6 md:p-10 rounded-3xl md:rounded-4xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="flex text-brand-accent mb-4 md:mb-6 text-sm gap-1">
            <i v-for="s in 5" :key="s" class="ph-fill ph-star"></i>
          </div>
          <p class="italic text-gray-600 dark:text-gray-300 mb-6 md:mb-10 leading-relaxed flex-grow text-sm md:text-base">
            "{{ review.quote }}"
          </p>
          <div class="flex items-center gap-3 md:gap-4 border-t border-gray-100 dark:border-gray-800 pt-4 md:pt-6">
            <img
              :src="review.avatar"
              :alt="review.name"
              class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-sm"
            />
            <div>
              <h4 class="font-bold text-brand-primary dark:text-white text-sm md:text-base">{{ review.name }}</h4>
              <p class="text-xs md:text-sm text-gray-500">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Bagikan Pengalaman -->
      <div
        class="mt-12 md:mt-16 bg-[#EBE4D8] dark:bg-[#342D28] rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-center max-w-4xl mx-auto shadow-inner"
        data-aos="zoom-in"
      >
        <h3 class="font-serif text-2xl md:text-4xl font-bold text-brand-primary dark:text-white mb-4 md:mb-6">
          Bagikan Pengalaman Anda
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-lg text-center leading-relaxed">
          Setiap kesan yang Anda bagikan adalah jejak yang menguatkan langkah kami. Biarkan cerita Anda menjadi bagian dari perjalanan Surabi Lembur.
        </p>
        <button
          class="bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark px-8 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2"
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
    quote: 'Nggak nyangka seenak ini weh. Surabinya soft banget, pinggirannya crispy, suka banget sama varian yang oncom. Fix bakal balik lagi sih.',
    name: 'Kirana Larasati',
    role: 'Food Enthusiast',
    avatar: 'https://nzmzljgowwpbnyjqdnvy.supabase.co/storage/v1/object/public/Surabi/IMG_20260628_085134.jpg',
  },
  {
    quote: 'First time cobain and honestly worth it sih. Rasa coklatnya juga balance, nggak over manis. Tempatnya juga chill buat nongkrong bentar.',
    name: 'Raka Permana',
    role: 'Content Creator',
    avatar: 'https://nzmzljgowwpbnyjqdnvy.supabase.co/storage/v1/object/public/Surabi/IMG_20260628_085439.jpg',
  },
  {
    quote: 'Ini sih hidden gem. Udah beberapa kali order rasanya selalu konsisten. Dateng masih anget juga. Literally my comfort food pas lagi capek kerja.',
    name: 'Sekar Ayu',
    role: 'Coffee & Food Lover',
    avatar: 'https://nzmzljgowwpbnyjqdnvy.supabase.co/storage/v1/object/public/Surabi/IMG_20260628_085304.jpg',
  },
]

function openWhatsApp() {
  window.open('https://wa.me/6288971885966?text=Halo%20Surabi%20Lembur!%20Saya%20ingin%20berbagi%20ulasan.', '_blank')
}
</script>
