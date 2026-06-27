<template>
  <section id="kontak" class="py-16 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Heading -->
    <div class="text-center mb-10 md:mb-16" data-aos="fade-up">
      <h2
        class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary dark:text-white mb-4 md:mb-6"
      >
        Hubungi Kami
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
        Ada pertanyaan tentang pesanan, menu, atau ingin berkolaborasi? Kami dengan
        senang hati akan membantu Anda. Jangan ragu untuk menyapa!
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

      <!-- ── Left Column ── -->
      <div class="lg:col-span-5 space-y-8 md:space-y-10" data-aos="fade-right">

        <!-- Contact channels -->
        <div class="bg-brand-surface dark:bg-brand-surfaceDark p-6 sm:p-8 rounded-3xl md:rounded-4xl">
          <h3 class="font-bold text-xl md:text-2xl mb-6 md:mb-8 dark:text-white">
            Sapa Kami Langsung
          </h3>
          <div class="space-y-5 md:space-y-6">
            <div v-for="channel in contactChannels" :key="channel.label" class="flex items-center gap-4 md:gap-5">
              <div
                class="w-12 h-12 md:w-14 md:h-14 bg-[#E0D7CB] dark:bg-[#3D352F] rounded-full flex items-center justify-center text-brand-primary dark:text-white text-xl md:text-2xl shadow-sm hover:scale-110 transition-transform"
              >
                <i :class="channel.icon"></i>
              </div>
              <div>
                <p class="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5 md:mb-1">
                  {{ channel.label }}
                </p>
                <p class="font-semibold text-base md:text-lg dark:text-gray-200">
                  {{ channel.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Accordion -->
        <div
          class="bg-white dark:bg-brand-surfaceDark border border-gray-200 dark:border-gray-800 p-6 sm:p-8 rounded-3xl md:rounded-4xl shadow-sm"
        >
          <h3 class="font-bold text-xl md:text-2xl mb-4 md:mb-6 dark:text-white">
            Pertanyaan Umum
          </h3>
          <div class="space-y-2">
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
                  class="ph ph-caret-down text-gray-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === i }"
                ></i>
              </button>

              <!-- Vue CSS transition for accordion — no max-height JS hack -->
              <Transition name="accordion">
                <div v-if="openFaq === i" class="overflow-hidden">
                  <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed pb-4">
                    {{ faq.answer }}
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Right Column ── -->
      <div class="lg:col-span-7 space-y-8 md:space-y-10" data-aos="fade-left">

        <!-- Contact form -->
        <div class="bg-[#EBE4D8] dark:bg-[#2A2420] p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-4xl shadow-inner">
          <h3 class="font-bold text-xl md:text-2xl mb-6 md:mb-8 dark:text-white">
            Kirim Pesan
          </h3>
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
                Alamat Email
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="nama@email.com"
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
                rows="4"
                placeholder="Tulis pesan..."
                class="w-full px-4 py-3 md:px-5 md:py-4 text-sm md:text-base rounded-xl md:rounded-2xl border-0 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-[#1A1614] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-4 md:py-5 rounded-xl md:rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-sm md:text-lg"
            >
              LANJUTKAN PESAN <i class="ph-bold ph-paper-plane-right"></i>
            </button>
          </form>
        </div>

        <!-- Map card -->
        <div
          class="bg-brand-surface dark:bg-brand-surfaceDark p-6 sm:p-8 rounded-3xl md:rounded-4xl flex flex-col sm:flex-row gap-6 md:gap-8 items-center"
        >
          <div
            class="w-full sm:w-1/2 relative h-40 sm:h-48 md:h-full min-h-[160px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Peta Lokasi"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black/10">
              <span
                class="bg-brand-primary text-white text-[10px] md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-2xl flex items-center gap-1.5 md:gap-2"
              >
                <i class="ph-fill ph-map-pin"></i> Surabi Lembur
              </span>
            </div>
          </div>
          <div class="w-full sm:w-1/2 space-y-4 md:space-y-6 text-center sm:text-left">
            <div>
              <h4
                class="font-bold text-lg md:text-xl mb-2 md:mb-3 flex items-center justify-center sm:justify-start gap-2 dark:text-white"
              >
                <i class="ph-fill ph-storefront text-brand-primary dark:text-brand-primaryDark"></i>
                Alamat Utama
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                Jl. Ahmad Yani No. 123,<br />Sumedang, Jawa Barat<br />Indonesia
              </p>
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

// ── Form state ─────────────────────────────────────────────────
const form = reactive({ nama: '', email: '', pesan: '' })

function handleSubmit() {
  emit('submit-form', { ...form })
}

// ── FAQ Accordion state ────────────────────────────────────────
// null = all closed. openFaq holds the index of the open item.
const openFaq = ref(null)

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

// ── Static data ────────────────────────────────────────────────
const contactChannels = [
  {
    label: 'WhatsApp',
    value: '+62 812 3456 7890',
    icon: 'ph-fill ph-whatsapp-logo',
  },
  {
    label: 'Email',
    value: 'halo@surabilembur.com',
    icon: 'ph-fill ph-envelope-simple',
  },
]

const faqs = [
  {
    question: 'Apakah bisa pesan dalam jumlah besar?',
    answer:
      'Tentu bisa! Kami melayani pemesanan dalam jumlah besar dengan pemberitahuan minimal H-2.',
  },
  {
    question: 'Berapa lama surabi bisa tahan?',
    answer:
      'Surabi kami tahan hingga 12 jam di suhu ruang, dan maksimal 2 hari di dalam kulkas.',
  },
]
</script>
