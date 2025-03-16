import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import pkg from './package.json';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `/${pkg.name}/` : undefined,
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}));
