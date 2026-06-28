<template>
  <section
    id="tentang"
    class="py-16 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <!-- Left: Text -->
      <div class="space-y-6 md:space-y-8" data-aos="fade-right">
        <span
          class="inline-block bg-brand-surface dark:bg-brand-surfaceDark text-brand-primary dark:text-brand-primaryDark text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest"
        >
          Tentang Kami
        </span>

        <h2
          class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary dark:text-white leading-tight"
        >
          Warisan Rasa dari Hati
        </h2>

        <p class="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
          Di tengah laju zaman yang terus bergerak, kami memilih kembali pada akar. Kami menyalakan kembali bara tradisi, merawat resep-resep warisan, lalu mengolahnya dengan sentuhan masa kini tanpa menghilangkan jiwanya. Sejak tahun 2020, Surabi Lembur tumbuh dari kecintaan kami terhadap kekayaan rasa yang dimiliki Nusantara.
        </p>

        <!-- Blockquote -->
        <blockquote
          class="bg-brand-surface dark:bg-brand-surfaceDark p-6 md:p-8 rounded-3xl md:rounded-4xl relative mt-6 md:mt-8"
        >
          <i
            class="ph-fill ph-quotes text-3xl md:text-5xl text-brand-primary/10 dark:text-brand-primaryDark/10 absolute top-4 left-4 md:top-6 md:left-6"
          ></i>
          <p
            class="italic font-serif text-base md:text-xl text-brand-primary dark:text-gray-200 relative z-10 leading-relaxed pt-2"
          >
            "Surabi bukan hanya tentang rasa, melainkan tentang kenangan yang tak pernah benar-benar usai. Di setiap gigitannya, tersimpan jejak masa kecil, kehangatan keluarga, dan cerita yang terus diwariskan dari satu generasi ke generasi berikutnya."
          </p>
          <footer class="mt-4 md:mt-6 flex items-center gap-3 md:gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full overflow-hidden">
              <img
                src="https://nzmzljgowwpbnyjqdnvy.supabase.co/storage/v1/object/public/Surabi/36e66b06358eee8ef3f530ab7c5e431e.jpg"
                alt="Bu Euis"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <strong class="block text-brand-primary dark:text-brand-primaryDark font-bold text-sm md:text-base">
                Bu Euis
              </strong>
              <span class="text-[10px] md:text-sm text-gray-500">Pendiri Surabi Lembur</span>
            </div>
          </footer>
        </blockquote>
      </div>

      <!-- Right: Image + Stats -->
      <div class="grid grid-cols-1 gap-4 md:gap-6" data-aos="fade-left">
        <div class="relative rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
            alt="Dapur Tradisional"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <!-- Stats strip — semua kolom sejajar dengan flex col center -->
        <div
          class="grid grid-cols-3 text-center bg-brand-surface dark:bg-brand-surfaceDark p-4 sm:p-6 md:p-8 rounded-3xl md:rounded-4xl shadow-sm mt-2"
        >
          <!-- Kolom 1: Pelanggan -->
          <div class="flex flex-col justify-center items-center px-1 md:px-2">
            <p class="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-brand-primary dark:text-brand-primaryDark leading-none">
              1000+
            </p>
            <p class="text-[9px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2 uppercase font-bold tracking-wider">
              Pelanggan<br class="block md:hidden" /> Setia
            </p>
          </div>

          <!-- Kolom 2: Tahun Pengalaman -->
          <div class="flex flex-col justify-center items-center border-x border-gray-300 dark:border-gray-700 px-1 md:px-2">
            <p class="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-brand-primary dark:text-brand-primaryDark leading-none">
              5
            </p>
            <p class="text-[9px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2 uppercase font-bold tracking-wider">
              Tahun<br class="block md:hidden" /> Pengalaman
            </p>
          </div>

          <!-- Kolom 3: Rating — bintang sejajar teks dengan items-baseline -->
          <div class="flex flex-col justify-center items-center px-1 md:px-2">
            <p class="font-serif font-extrabold text-brand-primary dark:text-brand-primaryDark leading-none flex items-baseline justify-center gap-0.5 md:gap-1">
              <span class="text-2xl sm:text-3xl md:text-4xl">4.9</span>
              <i class="ph-fill ph-star text-brand-accent text-base sm:text-xl md:text-2xl"></i>
            </p>
            <p class="text-[9px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2 uppercase font-bold tracking-wider">
              Rating<br class="block md:hidden" /> Kami
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
