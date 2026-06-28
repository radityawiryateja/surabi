<template>
  <section id="menu" class="bg-brand-surface dark:bg-brand-surfaceDark py-10 md:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading -->
      <div class="text-center mb-8 md:mb-12" data-aos="fade-up">
        <h2
          class="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-brand-primary dark:text-white mb-2 md:mb-4"
        >
          Menu Pilihan Kami
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-xs md:text-base max-w-xl mx-auto">
          Kami meracik resep terbaik dari bahan alami. Jaminan cita rasa otentik untuk
          setiap momen spesialmu.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div
        class="flex justify-start sm:justify-center gap-2 md:gap-3 mb-8 md:mb-10 overflow-x-auto hide-scroll pb-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-4 py-2 md:px-8 md:py-3 rounded-full text-[11px] md:text-sm font-bold whitespace-nowrap shadow-md transition-all"
          :class="
            activeFilter === cat
              ? 'bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark shadow-brand-primary/30'
              : 'bg-brand-light dark:bg-brand-dark text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800'
          "
          @click="setFilter(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Loading skeleton -->
      <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <div
          v-for="n in 4"
          :key="n"
          class="rounded-2xl md:rounded-4xl overflow-hidden bg-brand-light dark:bg-brand-dark animate-pulse"
        >
          <div class="aspect-[4/3] bg-gray-200 dark:bg-gray-700"></div>
          <div class="p-4 md:p-6 space-y-3">
            <div class="h-4 md:h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
            <div class="h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
            <div class="h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Menu grid -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
      >
        <MenuCard
          v-for="item in visibleMenu"
          :key="item.id"
          :item="item"
          :format-harga="formatHarga"
          @click="$emit('open-product', item)"
        />
      </div>

      <!-- Load More -->
      <div v-if="hasMore && !isLoading" class="text-center mt-8 md:mt-12" data-aos="fade-up">
        <button
          class="border-2 border-brand-primary dark:border-brand-primaryDark text-brand-primary dark:text-brand-primaryDark px-6 py-2 md:px-10 md:py-3 rounded-full text-xs md:text-base font-bold hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primaryDark dark:hover:text-brand-dark transition-all"
          @click="loadMore"
        >
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, defineComponent, h } from 'vue'
import { useMenu } from '@/composables/useMenu.js'

defineEmits(['open-product'])

const categories = ['Semua', 'Manis', 'Asin', 'Best Seller', 'Special']

const {
  isLoading,
  activeFilter,
  visibleMenu,
  hasMore,
  setFilter,
  loadMore,
  fetchMenu,
  formatHarga,
} = useMenu()

onMounted(fetchMenu)

// ── MenuCard sub-component ────────────────────────────────────
const MenuCard = defineComponent({
  props: {
    item: { type: Object, required: true },
    formatHarga: { type: Function, required: true },
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => {
      const { item, formatHarga } = props
      return h(
        'div',
        {
          class:
            'group cursor-pointer bg-brand-light dark:bg-brand-dark rounded-2xl md:rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300',
          'data-aos': 'fade-up',
          onClick: () => emit('click', item),
        },
        [
          // Image wrapper
          h('div', { class: 'relative aspect-[4/3] overflow-hidden' }, [
            // Rating badge
            h(
              'span',
              {
                class:
                  'absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1 z-10 text-brand-primary dark:text-white shadow-sm',
              },
              [
                h('i', { class: 'ph-fill ph-star text-brand-accent' }),
                ` ${item.rating || '4.9'}`,
              ]
            ),
            // Badge (Best Seller / Special)
            item.badge
              ? h(
                  'span',
                  {
                    class:
                      'absolute top-3 right-3 md:top-4 md:right-4 bg-brand-accent text-brand-primary text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full z-10 shadow-sm',
                  },
                  item.badge
                )
              : null,
            // Product image
            h('img', {
              src: item.foto_produk,
              alt: item.nama_produk,
              class:
                'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700',
              loading: 'lazy',
            }),
          ]),
          // Card body
          h('div', { class: 'p-4 md:p-6' }, [
            h(
              'h3',
              {
                class:
                  'font-serif font-bold text-base md:text-xl mb-1 md:mb-2 text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors',
              },
              item.nama_produk
            ),
            h(
              'p',
              {
                class:
                  'text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-4 line-clamp-2 leading-relaxed',
              },
              item.deskripsi
            ),
            h(
              'p',
              { class: 'font-bold text-brand-primary dark:text-brand-primaryDark text-sm md:text-xl' },
              formatHarga(item.harga)
            ),
          ]),
        ]
      )
    }
  },
})
</script>
