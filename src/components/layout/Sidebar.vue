<template>
  <!-- Overlay + Sidebar wrapped in a single portal-like div -->
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="modal-backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Sidebar panel -->
    <Transition name="sidebar">
      <div
        v-if="isOpen"
        class="fixed left-0 top-0 w-4/5 max-w-sm h-full bg-brand-light dark:bg-brand-dark shadow-2xl p-6 md:p-8 flex flex-col z-[51]"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-10">
          <span
            class="font-serif font-bold text-xl text-brand-primary dark:text-brand-primaryDark flex items-center gap-2"
          >
            <i class="ph-fill ph-cooking-pot"></i> Surabi Lembur
          </span>
          <button
            class="text-xl text-gray-500 hover:text-red-500 bg-gray-100 dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition"
            aria-label="Tutup menu"
            @click="$emit('close')"
          >
            <i class="ph ph-x"></i>
          </button>
        </div>

        <!-- Nav links -->
        <nav class="flex flex-col gap-6 text-base font-medium text-brand-primary dark:text-brand-primaryDark flex-grow">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="hover:translate-x-2 transition-transform"
            :class="link.divider ? 'border-t border-gray-200 dark:border-gray-700 pt-6' : ''"
            @click.prevent="navigate(link.id)"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- CTA -->
        <div class="mt-auto pt-6">
          <a
            href="#menu"
            class="block w-full text-center bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-dark py-3 rounded-full font-bold shadow-lg"
            @click.prevent="navigate('menu')"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { inject, watch } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

const scrollTo = inject('scrollTo')

const navLinks = [
  { id: 'beranda',     label: 'Beranda' },
  { id: 'kontak',      label: 'Lokasi' },
  { id: 'menu',        label: 'Menu' },
  { id: 'tentang',     label: 'Tentang Kami' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'kontak',      label: 'Hubungi Kami', divider: true },
]

function navigate(id) {
  scrollTo(id)
  emit('close')
}

// Lock body scroll when open
watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>
