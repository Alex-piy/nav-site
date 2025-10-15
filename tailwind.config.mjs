import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取共享主题配置
const tokensPath = resolve(__dirname, '../shared-data/shared/theme/tokens.json');
const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
        neutral: tokens.colors.neutral,
      },
      fontFamily: tokens.fontFamily,
      fontSize: tokens.fontSizes,
      spacing: tokens.spacingScale,
      borderRadius: tokens.radii,
      boxShadow: {
        card: tokens.shadows.card,
        'card-hover': tokens.shadows.cardHover,
      },
    },
  },
  plugins: [],
};
