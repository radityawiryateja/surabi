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
      <div
        v-if="isOpen && product"
        class="fixed inset-0 z-[101] flex items-end md:items-center justify-center pointer-events-none"
      >
        <div
          class="relative bg-brand-light dark:bg-brand-surfaceDark w-full max-w-md md:max-w-lg lg:max-w-xl mx-4 rounded-3xl md:rounded-4xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col pointer-events-auto"
        >
          <!-- Product image + close -->
          <div class="relative h-56 md:h-72 w-full flex-shrink-0">
            <button
              class="absolute top-4 left-4 z-10 w-10 h-10 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-brand-primary dark:text-white hover:scale-110 transition-transform"
              aria-label="Tutup"
              @click="$emit('close')"
            >
              <i class="ph ph-arrow-left text-xl"></i>
            </button>
            <img
              :src="product.foto_produk"
              :alt="product.nama_produk"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Scrollable body -->
          <div class="p-5 md:p-8 overflow-y-auto hide-scroll flex-grow">
            <!-- Title row -->
            <div class="flex justify-between items-start mb-2">
              <h3
                class="font-serif text-2xl md:text-3xl font-bold text-brand-primary dark:text-white"
              >
                {{ product.nama_produk }}
              </h3>
              <span
                v-if="product.badge"
                class="bg-brand-surface dark:bg-yellow-900/40 text-brand-accent text-[10px] md:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ml-3 flex-shrink-0"
              >
                {{ product.badge }}
              </span>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-2 mb-3 md:mb-4 text-xs md:text-sm">
              <i class="ph-fill ph-star text-brand-accent text-base md:text-lg"></i>
              <span class="font-bold dark:text-gray-200">{{ product.rating || '4.9' }}</span>
            </div>

            <!-- Price -->
            <p
              class="font-serif font-bold text-xl md:text-2xl text-brand-primary dark:text-brand-primaryDark mb-4"
            >
              {{ formatHarga(product.harga) }}
            </p>

            <!-- Description -->
            <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
              {{ product.deskripsi }}
            </p>

            <!-- Toppings -->
            <h4 class="font-bold text-brand-primary dark:text-white mb-4 text-sm md:text-base">
              Tambahan Topping
            </h4>
            <div class="space-y-3 mb-6 md:mb-8">
              <label
                v-for="topping in toppings"
                :key="topping.name"
                class="flex items-center justify-between p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-xl md:rounded-2xl cursor-pointer hover:border-brand-primary dark:hover:border-brand-primaryDark transition-colors"
              >
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    class="w-4 h-4 md:w-5 md:h-5 accent-brand-primary rounded"
                  />
                  <span class="text-xs md:text-sm font-medium dark:text-gray-200">
                    {{ topping.name }}
                  </span>
                </div>
                <span class="text-xs md:text-sm text-gray-500">{{ topping.price }}</span>
              </label>
            </div>

            <!-- CTA -->
            <button
              class="w-full bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-3 md:py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20 text-sm md:text-base"
              @click="orderViaWA"
            >
              <i class="ph ph-whatsapp-logo text-lg md:text-xl"></i>
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
  { name: 'Keju Parut',       price: '+Rp 3.000' },
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
