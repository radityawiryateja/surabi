<template>
  <section id="kontak" class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Heading -->
    <div class="text-center mb-16" data-aos="fade-up">
      <h2 class="font-serif text-4xl md:text-5xl font-bold text-brand-primary dark:text-white mb-6">
        Hubungi Kami
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
        Ada pertanyaan tentang pesanan, menu, atau ingin berkolaborasi? Kami dengan
        senang hati akan membantu Anda. Jangan ragu untuk menyapa!
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

      <!-- ── Kolom Kiri ── -->
      <div class="lg:col-span-5 space-y-10" data-aos="fade-right">

        <!-- Kontak langsung + sosmed — digabung dalam satu card seperti HTML referensi -->
        <div class="bg-brand-surface dark:bg-brand-surfaceDark p-8 rounded-4xl">
          <h3 class="font-bold text-2xl mb-8 dark:text-white">Sapa Kami Langsung</h3>
          <div class="space-y-6">
            <div v-for="channel in contactChannels" :key="channel.label" class="flex items-center gap-5">
              <div
                class="w-14 h-14 bg-[#E0D7CB] dark:bg-[#3D352F] rounded-full flex items-center justify-center text-brand-primary dark:text-white text-2xl shadow-sm hover:scale-110 transition-transform cursor-pointer"
              >
                <i :class="channel.icon"></i>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  {{ channel.label }}
                </p>
                <p class="font-semibold text-lg dark:text-gray-200">{{ channel.value }}</p>
              </div>
            </div>
          </div>

          <!-- Sosmed — ada di HTML referensi, hilang di Vue sebelumnya -->
          <h3 class="font-bold text-2xl mb-6 mt-10 dark:text-white">Ikuti Perjalanan Kami</h3>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.label"
              href="#"
              :aria-label="social.label"
              class="w-12 h-12 bg-white dark:bg-brand-dark rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all text-xl"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- FAQ Accordion -->
        <div class="bg-white dark:bg-brand-surfaceDark border border-gray-200 dark:border-gray-800 p-8 rounded-4xl shadow-sm">
          <h3 class="font-bold text-2xl mb-6 dark:text-white">Pertanyaan Umum</h3>
          <div class="space-y-2">
            <div
              v-for="(faq, i) in faqs"
              :key="i"
              :class="i < faqs.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''"
            >
              <button
                class="w-full text-left py-4 flex justify-between items-center font-semibold text-gray-800 dark:text-gray-200 focus:outline-none"
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
                  <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pb-4">
                    {{ faq.answer }}
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Kolom Kanan ── -->
      <div class="lg:col-span-7 space-y-10" data-aos="fade-left">

        <!-- Form Kirim Pesan -->
        <div class="bg-[#EBE4D8] dark:bg-[#2A2420] p-8 md:p-10 rounded-4xl shadow-inner">
          <h3 class="font-bold text-2xl mb-8 dark:text-white">Kirim Pesan</h3>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                Nama Lengkap
              </label>
              <input
                v-model="form.nama"
                type="text"
                required
                placeholder="Masukkan nama Anda"
                class="w-full px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-[#1A1614] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
              />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                Alamat Email
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="nama@email.com"
                class="w-full px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-[#1A1614] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
              />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                Pesan Anda
              </label>
              <textarea
                v-model="form.pesan"
                required
                rows="4"
                placeholder="Tulis pesan, pertanyaan, atau saran Anda di sini..."
                class="w-full px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-[#1A1614] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-5 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg"
            >
              KIRIM PESAN <i class="ph-bold ph-paper-plane-right"></i>
            </button>
          </form>
        </div>

        <!-- Lokasi + Tombol Maps — ada di HTML referensi, hilang di Vue sebelumnya -->
        <div class="bg-brand-surface dark:bg-brand-surfaceDark p-8 rounded-4xl flex flex-col md:flex-row gap-8 items-center">
          <!-- Map image -->
          <div class="w-full md:w-1/2 relative h-48 md:h-full min-h-[200px] rounded-3xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Peta Lokasi"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black/10">
              <span class="bg-brand-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
                <i class="ph-fill ph-map-pin"></i> Surabi Lembur
              </span>
            </div>
          </div>

          <!-- Alamat + tombol -->
          <div class="w-full md:w-1/2 space-y-6">
            <div>
              <h4 class="font-bold text-xl mb-3 flex items-center gap-2 dark:text-white">
                <i class="ph-fill ph-storefront text-brand-primary dark:text-brand-primaryDark"></i>
                Alamat Utama
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Jl. Ahmad Yani No. 123,<br />Sumedang, Jawa Barat<br />Indonesia
              </p>
            </div>
            <!-- Tombol Maps — ada di HTML referensi, hilang di Vue sebelumnya -->
            <div class="flex flex-col gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-3 rounded-full text-sm font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <i class="ph-bold ph-map-trifold"></i> Buka di Google Maps
              </a>
              <a
                href="https://waze.com"
                target="_blank"
                class="w-full border-2 border-brand-primary dark:border-brand-primaryDark text-brand-primary dark:text-brand-primaryDark py-3 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primaryDark dark:hover:text-brand-dark transition flex items-center justify-center gap-2"
              >
                <i class="ph-bold ph-navigation-arrow"></i> Buka di Waze
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
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
  { label: 'WhatsApp', value: '+62 812 3456 7890',    icon: 'ph-fill ph-whatsapp-logo' },
  { label: 'Email',    value: 'surabilembur@mail.com', icon: 'ph-fill ph-envelope-simple' },
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
