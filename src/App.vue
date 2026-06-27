<template>
  <div
    class="bg-brand-light dark:bg-brand-dark text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500 antialiased overflow-x-hidden"
  >
    <!-- Layout -->
    <Navbar @open-sidebar="isSidebarOpen = true" />
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Modals (rendered at root so z-index is always correct) -->
    <ProductModal
      :product="activeProduct"
      :is-open="isProductModalOpen"
      @close="closeProductModal"
    />
    <ContactModal
      :form-data="pendingFormData"
      :is-open="isContactModalOpen"
      @close="isContactModalOpen = false"
    />

    <!-- Page Sections -->
    <main class="pt-16 md:pt-20">
      <Hero />
      <MenuCatalog @open-product="openProductModal" />
      <About />
      <Testimonial />
      <Contact @submit-form="handleFormSubmit" />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar     from '@/components/layout/Navbar.vue'
import Sidebar    from '@/components/layout/Sidebar.vue'
import Footer     from '@/components/layout/Footer.vue'
import Hero       from '@/components/sections/Hero.vue'
import MenuCatalog from '@/components/sections/MenuCatalog.vue'
import About      from '@/components/sections/About.vue'
import Testimonial from '@/components/sections/Testimonial.vue'
import Contact    from '@/components/sections/Contact.vue'
import ProductModal from '@/components/ui/ProductModal.vue'
import ContactModal from '@/components/ui/ContactModal.vue'

// ── Sidebar ───────────────────────────────────────────────────
const isSidebarOpen = ref(false)

// ── Product Modal ─────────────────────────────────────────────
const isProductModalOpen = ref(false)
const activeProduct = ref(null)

function openProductModal(product) {
  activeProduct.value = product
  isProductModalOpen.value = true
  document.body.style.overflow = 'hidden'
}
function closeProductModal() {
  isProductModalOpen.value = false
  document.body.style.overflow = ''
}

// ── Contact Modal ─────────────────────────────────────────────
const isContactModalOpen = ref(false)
const pendingFormData = ref({})

function handleFormSubmit(formData) {
  pendingFormData.value = formData
  isContactModalOpen.value = true
}

// ── Provide scroll-to helpers for child nav links ─────────────
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
provide('scrollTo', scrollTo)

// ── AOS Init ──────────────────────────────────────────────────
onMounted(() => {
  AOS.init({
    once: true,
    offset: 100,
    easing: 'ease-out-cubic',
    duration: 700,
  })
})
</script>
