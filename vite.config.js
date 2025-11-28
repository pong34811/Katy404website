import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ถ้าใช้ React
import tailwindcss from '@tailwindcss/vite'; // <--- Import Tailwind Plugin

export default defineConfig({
  plugins: [
    react(), // ถ้าใช้ React
    tailwindcss(), // <--- เพิ่ม Plugin นี้
  ],
});