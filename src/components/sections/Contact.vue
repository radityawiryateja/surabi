<template>
  <div>
    
    <section id="kontak" class="pt-12 pb-8 md:pt-20 md:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-10 md:mb-16" data-aos="fade-up">
        <h2 class="font-serif text-3xl md:text-5xl font-bold text-brand-primary dark:text-white mb-4 md:mb-6">
          Hubungi Kami
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
          Ada pertanyaan tentang pesanan, menu, atau ingin berkolaborasi? Kami dengan
          senang hati akan membantu Anda. Jangan ragu untuk menyapa!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-16">
        
        <div class="lg:col-span-5 space-y-6 md:space-y-10" data-aos="fade-right">
          
          <div class="bg-brand-surface dark:bg-brand-surfaceDark p-6 md:p-8 rounded-3xl md:rounded-4xl">
            <h3 class="font-bold text-xl md:text-2xl mb-6 md:mb-8 dark:text-white">Sapa Kami Langsung</h3>
            <div class="space-y-5 md:space-y-6">
              <div v-for="channel in contactChannels" :key="channel.label" class="flex items-center gap-4 md:gap-5">
                <div
                  class="w-12 h-12 md:w-14 md:h-14 min-w-[3rem] md:min-w-[3.5rem] flex-shrink-0 bg-[#E0D7CB] dark:bg-[#3D352F] rounded-full flex items-center justify-center text-brand-primary dark:text-white text-xl md:text-2xl shadow-sm hover:scale-110 transition-transform cursor-pointer"
                >
                  <i :class="channel.icon" class="leading-none"></i>
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5 md:mb-1">
                    {{ channel.label }}
                  </p>
                  <p class="font-semibold text-sm md:text-lg dark:text-gray-200 truncate">{{ channel.value }}</p>
                </div>
              </div>
            </div>

            <h3 class="font-bold text-xl md:text-2xl mb-4 md:mb-6 mt-8 md:mt-10 dark:text-white">Ikuti Perjalanan Kami</h3>
            <div class="flex gap-3 md:gap-4">
              <a
                v-for="social in socials"
                :key="social.label"
                href="#"
                :aria-label="social.label"
                class="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-brand-dark rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all text-lg md:text-xl"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>

          <div class="bg-white dark:bg-brand-surfaceDark border border-gray-200 dark:border-gray-800 p-6 md:p-8 rounded-3xl md:rounded-4xl shadow-sm">
            <h3 class="font-bold text-xl md:text-2xl mb-4 md:mb-6 dark:text-white">Pertanyaan Umum</h3>
            <div class="space-y-1 md:space-y-2">
              <div
                v-for="(faq, i) in faqs"
                :key="i"
                :class="i < faqs.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''"
              >
                <button
                  class="w-full text-left py-3 md:py-4 flex justify-between items-center font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200 focus:outline-none"
                  @click="toggleFaq(i)"
                >
                  {{ faq.question }}
                  <i
                    class="ph ph-caret-down text-gray-400 transition-transform duration-300 flex-shrink-0 ml-3"
                    :class="{ 'rotate-180': openFaq === i }"
                  ></i>
                </button>
                <Transition name="accordion">
                  <div v-if="openFaq === i" class="overflow-hidden">
                    <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed pb-3 md:pb-4">
                      {{ faq.answer }}
                    </p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 lg:self-start" data-aos="fade-left">
          
          <div class="bg-[#EBE4D8] dark:bg-[#2A2420] p-6 md:p-10 rounded-3xl md:rounded-4xl shadow-inner">
            <h3 class="font-bold text-xl md:text-2xl mb-6 md:mb-8 dark:text-white">Kirim Pesan</h3>
            <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 md:mb-2 tracking-wide">
                  Nama Lengkap
                </label>
                <input
                  v-model="form.nama"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  class="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base rounded-xl md:rounded-2xl border-0 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-[#1A1614] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                />
              </div>
              <div>
                <label class="block text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 md:mb-2 tracking-wide">
                  Pesan Anda
                </label>
                <textarea
                  v-model="form.pesan"
                  required
                  rows="5"
                  placeholder="Tulis pesan, pertanyaan, atau saran Anda di sini..."
                  class="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base rounded-xl md:rounded-2xl border-0 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-[#1A1614] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-sm md:text-lg"
              >
                KIRIM PESAN <i class="ph-bold ph-paper-plane-right"></i>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>

    <section id="lokasi" class="pb-12 pt-4 md:pb-28 md:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-brand-surface dark:bg-brand-surfaceDark p-6 md:p-8 rounded-3xl md:rounded-4xl flex flex-col md:flex-row gap-6 md:gap-8 items-center" data-aos="fade-up">
        
        <div class="w-full md:w-1/2 relative h-48 md:min-h-[250px] lg:min-h-[300px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
            alt="Peta Lokasi"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/10">
            <span class="bg-brand-primary text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-2xl flex items-center gap-2">
              <i class="ph-fill ph-map-pin"></i> Surabi Lembur
            </span>
          </div>
        </div>

        <div class="w-full md:w-1/2 space-y-5 md:space-y-6">
          <div>
            <h4 class="font-bold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2 dark:text-white">
              <i class="ph-fill ph-storefront text-brand-primary dark:text-brand-primaryDark"></i>
              Alamat Utama
            </h4>
            <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              Jl. Ahmad Yani No. 123,<br />Sumedang, Jawa Barat<br />Indonesia
            </p>
          </div>
          
          <div class="flex flex-col gap-2.5 md:gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <i class="ph-bold ph-map-trifold"></i> Buka di Google Maps
            </a>
            <a
              href="https://waze.com"
              target="_blank"
              class="w-full border-2 border-brand-primary dark:border-brand-primaryDark text-brand-primary dark:text-brand-primaryDark py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primaryDark dark:hover:text-brand-dark transition flex items-center justify-center gap-2"
            >
              <i class="ph-bold ph-navigation-arrow"></i> Buka di Waze
            </a>
          </div>
        </div>
        
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['submit-form'])

const form = reactive({ nama: '', email: '', pesan: '' })

function handleSubmit() {
  emit('submit-form', { ...form })
}

const openFaq = ref(null)
function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

const contactChannels = [
  { label: 'WhatsApp', value: '+62 889 7188 5966',    icon: 'ph-fill ph-whatsapp-logo' },
  { label: 'Email',    value: 'surabilembur@gmail.com', icon: 'ph-fill ph-envelope-simple' },
]

const socials = [
  { label: 'Instagram', icon: 'ph ph-instagram-logo' },
  { label: 'Facebook',  icon: 'ph ph-facebook-logo' },
]

const faqs = [
  {
    question: 'Apakah bisa pesan dalam jumlah besar?',
    answer: 'Tentu bisa! Kami melayani pemesanan dalam jumlah besar untuk berbagai acara seperti rapat, pernikahan, atau syukuran dengan pemberitahuan minimal H-2.',
  },
  {
    question: 'Apakah melayani pengiriman ke luar kota?',
    answer: 'Saat ini kami hanya melayani pengiriman instan untuk area kota Sumedang dan sekitarnya guna menjaga kualitas dan kesegaran surabi.',
  },
  {
    question: 'Berapa lama surabi bisa tahan?',
    answer: 'Surabi kami tahan hingga 12 jam di suhu ruang, dan maksimal 2 hari jika disimpan di dalam kulkas (hangatkan kembali sebelum dinikmati).',
  },
]
</script>
