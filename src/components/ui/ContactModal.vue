<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="modal-backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Panel -->
    <Transition name="modal-content">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[111] flex items-center justify-center pointer-events-none px-4"
      >
        <div
          class="relative bg-brand-light dark:bg-brand-surfaceDark w-full max-w-sm rounded-3xl md:rounded-4xl shadow-2xl p-6 md:p-8 pointer-events-auto"
        >
          <!-- Heading -->
          <div class="text-center mb-6">
            <h3 class="font-serif text-xl md:text-2xl font-bold text-brand-primary dark:text-white mb-2">
              Pilih Jalur Pesan
            </h3>
            <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              Pesan Anda sudah siap dikirim.
            </p>
          </div>

          <!-- Channel buttons -->
          <div class="space-y-3 md:space-y-4">
            <button
              class="w-full bg-[#25D366] text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm md:text-lg"
              @click="sendViaWA"
            >
              <i class="ph-fill ph-whatsapp-logo text-xl md:text-2xl"></i> WhatsApp
            </button>
            <button
              class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm md:text-lg"
              @click="sendViaEmail"
            >
              <i class="ph-fill ph-envelope-simple text-xl md:text-2xl"></i> Email
            </button>
          </div>

          <button
            class="w-full mt-4 py-2 md:py-3 text-sm md:text-base text-gray-500 font-semibold hover:text-red-500 transition-colors"
            @click="$emit('close')"
          >
            Batal
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  formData: { type: Object, default: () => ({}) },
  isOpen:   { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

const WA_NUMBER  = '6288971885966'
const EMAIL_TUJUAN = 'surabilembur@gmail.com'

function sendViaWA() {
  const { nama = '', pesan = '', email = '' } = props.formData
  const text = encodeURIComponent(
    `Halo Surabi Lembur, saya ${nama}.\n\n${pesan}\n\nEmail kontak: ${email}`
  )
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
  emit('close')
}

function sendViaEmail() {
  const { nama = '', pesan = '', email = '' } = props.formData
  const subject = encodeURIComponent(`Pesan dari Website - ${nama}`)
  const body    = encodeURIComponent(
    `Halo Tim Surabi Lembur,\n\n${pesan}\n\nSalam,\n${nama}\n${email}`
  )
  window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`
  emit('close')
}
</script>
