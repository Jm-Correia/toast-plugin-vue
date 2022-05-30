import { createApp } from 'vue'
import App from './App.vue'
import ToastModal from './plugin/Toast'

const app = createApp(App)
app.use(ToastModal)

app.mount('#app')
