// src/composables/useMenu.js
import { ref, computed } from 'vue'
import { createClient } from '@supabase/supabase-js'

// ============================================================
// >>> GANTI DENGAN URL DAN ANON KEY SUPABASE KAMU <<<
// Jika belum dikonfigurasi, aplikasi otomatis pakai dummyData.
// ============================================================
const SUPABASE_URL = 'https://XYZ.supabase.co'
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY'

const isSupabaseConfigured =
  SUPABASE_URL !== 'https://XYZ.supabase.co' &&
  SUPABASE_KEY !== 'YOUR_SUPABASE_ANON_KEY'

let supabase = null
if (isSupabaseConfigured) {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
}

// ── Data dummy untuk fallback / development ──────────────────
const DUMMY_MENU = [
  {
    id: 1,
    nama_produk: 'Surabi Original',
    deskripsi: 'Cita rasa klasik tradisional dengan gurihnya santan murni.',
    harga: 2000,
    kategori: 'Asin',
    rating: 4.9,
    foto_produk: 'https://images.unsplash.com/photo-1528207776546-384111d0bb89?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
  },
  {
    id: 2,
    nama_produk: 'Surabi Cokelat',
    deskripsi: 'Lelehan cokelat hitam pekat yang kaya rasa.',
    harga: 7000,
    kategori: 'Manis',
    rating: 4.8,
    foto_produk: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
  },
  {
    id: 3,
    nama_produk: 'Surabi Oncom',
    deskripsi: 'Topping oncom panggang tradisional dengan cita rasa gurih dan pedas.',
    harga: 3000,
    kategori: 'Asin',
    rating: 4.9,
    foto_produk: 'https://images.unsplash.com/photo-1626200926719-74d44081c7f4?auto=format&fit=crop&q=80&w=800',
    badge: '',
  },
  {
    id: 4,
    nama_produk: 'Surabi Telor Mayones',
    deskripsi: 'Topping telur yang lembut dengan siraman saus mayones krimi.',
    harga: 7000,
    kategori: 'Asin',
    rating: 5.0,
    foto_produk: 'https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?auto=format&fit=crop&q=80&w=800',
    badge: 'Special',
  },
  {
    id: 5,
    nama_produk: 'Surabi Kinca',
    deskripsi: 'Saus gula aren manis legit dengan aroma pandan yang harum.',
    harga: 4000,
    kategori: 'Manis',
    rating: 4.7,
    foto_produk: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    badge: '',
  },
  {
    id: 6,
    nama_produk: 'Surabi Sosis Pedas',
    deskripsi: 'Irisan sosis sapi segar dengan saus pedas rahasia kami.',
    harga: 6000,
    kategori: 'Asin',
    rating: 4.8,
    foto_produk: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=80&w=800',
    badge: '',
  },
]

// ── Composable ────────────────────────────────────────────────
export function useMenu() {
  const allMenu = ref([])
  const isLoading = ref(false)
  const activeFilter = ref('Semua')
  const displayedCount = ref(4)

  // Filtered by category
  const filteredMenu = computed(() => {
    if (activeFilter.value === 'Semua') return allMenu.value
    return allMenu.value.filter((item) => item.kategori === activeFilter.value)
  })

  // Sliced to displayedCount for "Load More"
  const visibleMenu = computed(() =>
    filteredMenu.value.slice(0, displayedCount.value)
  )

  const hasMore = computed(
    () => displayedCount.value < filteredMenu.value.length
  )

  function setFilter(category) {
    activeFilter.value = category
    displayedCount.value = 4
  }

  function loadMore() {
    displayedCount.value += 4
  }

  async function fetchMenu() {
    isLoading.value = true
    try {
      if (supabase) {
        const { data, error } = await supabase.from('produk').select('*')
        if (error) throw error
        allMenu.value = data?.length ? data : DUMMY_MENU
      } else {
        allMenu.value = DUMMY_MENU
      }
    } catch {
      allMenu.value = DUMMY_MENU
    } finally {
      isLoading.value = false
    }
  }

  function formatHarga(harga) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(harga)
  }

  return {
    allMenu,
    isLoading,
    activeFilter,
    filteredMenu,
    visibleMenu,
    hasMore,
    setFilter,
    loadMore,
    fetchMenu,
    formatHarga,
  }
}
