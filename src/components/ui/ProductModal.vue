<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="modal-backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Modal panel -->
    <Transition name="modal-content">
      <!-- PERUBAHAN: items-end diganti items-center, ditambah p-4 agar tidak mepet tepi layar -->
      <div
        v-if="isOpen && product"
        class="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
      >
        <!-- PERUBAHAN: mx-0 dihapus, rounded-t-3xl diganti jadi rounded-3xl agar lengkung di semua sudut -->
        <div
          class="relative bg-brand-light dark:bg-brand-surfaceDark w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl md:rounded-4xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col pointer-events-auto"
        >
          <!-- Product image + action buttons -->
          <div class="relative h-48 md:h-72 w-full flex-shrink-0 bg-gray-100 dark:bg-gray-800">
            <button
              class="absolute top-3 left-3 md:top-4 md:left-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-brand-primary dark:text-white hover:scale-110 transition-transform"
              aria-label="Tutup"
              @click="$emit('close')"
            >
              <i class="ph ph-arrow-left text-sm md:text-xl"></i>
            </button>
            <button
              class="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-brand-primary dark:text-white hover:scale-110 transition-transform"
              aria-label="Bagikan"
            >
              <i class="ph ph-share-network text-sm md:text-xl"></i>
            </button>
            <img
              :src="product.foto_produk"
              :alt="product.nama_produk"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Scrollable body -->
          <div class="p-4 md:p-8 overflow-y-auto flex-grow modal-scroll">
            <!-- Title + badge -->
            <div class="flex justify-between items-start mb-1.5 md:mb-2">
              <h3 class="font-serif text-lg md:text-3xl font-bold text-brand-primary dark:text-white leading-tight">
                {{ product.nama_produk }}
              </h3>
              <span
                v-if="product.badge"
                class="bg-brand-surface dark:bg-yellow-900/40 text-brand-accent text-[9px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full flex items-center gap-1 ml-2 flex-shrink-0 mt-0.5 md:mt-0"
              >
                {{ product.badge }}
              </span>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4 text-[11px] md:text-sm">
              <i class="ph-fill ph-star text-brand-accent text-sm md:text-lg"></i>
              <span class="font-bold dark:text-gray-200">{{ product.rating || '4.9' }}</span>
              <span class="text-gray-500 dark:text-gray-400">({{ product.ulasan || '120' }}+ ulasan)</span>
            </div>

            <!-- Price -->
            <p class="font-serif font-bold text-lg md:text-2xl text-brand-primary dark:text-brand-primaryDark mb-3 md:mb-4">
              {{ formatHarga(product.harga) }}
            </p>

            <!-- Description -->
            <p class="text-[11px] md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5 md:mb-8">
              {{ product.deskripsi }}
            </p>

            <!-- Toppings -->
            <h4 class="font-bold text-brand-primary dark:text-white mb-2 md:mb-4 text-xs md:text-base">
              Tambahan Topping
            </h4>
            <div class="space-y-2 md:space-y-3 mb-5 md:mb-8">
              <div
                v-for="topping in toppings"
                :key="topping.name"
                class="flex items-center justify-between p-2.5 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg md:rounded-2xl"
              >
                <span class="text-[11px] md:text-sm font-medium dark:text-gray-200">{{ topping.name }}</span>
                <span class="text-[11px] md:text-sm text-gray-500">{{ topping.price }}</span>
              </div>
            </div>

            <!-- CTA -->
            <button
              class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-2.5 md:py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20 text-xs md:text-base"
              @click="orderViaWA"
            >
              <i class="ph ph-whatsapp-logo text-base md:text-xl"></i>
              PESAN VIA WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useMenu } from '@/composables/useMenu.js'

const props = defineProps({
  product: { type: Object, default: null },
  isOpen:  { type: Boolean, default: false },
})
defineEmits(['close'])

const { formatHarga } = useMenu()

const toppings = [
  { name: 'Keju Parut',        price: '+Rp 3.000' },
  { name: 'Kacang Sangrai',    price: '+Rp 2.000' },
  { name: 'Susu Kental Manis', price: '+Rp 1.000' },
]

function orderViaWA() {
  if (!props.product) return
  const text = encodeURIComponent(
    `Halo Surabi Lembur, saya ingin memesan *${props.product.nama_produk}* (${formatHarga(props.product.harga)}). Terima kasih!`
  )
  window.open(`https://wa.me/6281234567890?text=${text}`, '_blank')
}
</script>

<style scoped>
/* Scrollbar tipis tapi tetap terlihat di dalam modal */
.modal-scroll::-webkit-scrollbar {
  width: 4px;
}
.modal-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.modal-scroll::-webkit-scrollbar-thumb {
  background: #d4d4d8;
  border-radius: 4px;
}
.dark .modal-scroll::-webkit-scrollbar-thumb {
  background: #52525b;
}
</style>
