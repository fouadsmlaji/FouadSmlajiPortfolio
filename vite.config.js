import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/FouadSmlajiPortfolio", // Must match repo name
  plugins: [react()],
});

