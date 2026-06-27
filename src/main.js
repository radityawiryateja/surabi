import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Phosphor Icons (via CDN script injected here to keep index.html clean)
const phosphorScript = document.createElement('script')
phosphorScript.src = 'https://unpkg.com/@phosphor-icons/web'
document.head.appendChild(phosphorScript)

const app = createApp(App)
app.mount('#app')
