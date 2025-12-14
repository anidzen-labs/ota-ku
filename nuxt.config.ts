export default defineNuxtConfig({
  css: [
    '~/assets/root.scss',
    '~/assets/variables.scss',
  ],

  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-gtag',
  ],

  vuetify: {
    moduleOptions: {
      /* настройки модуля */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark', // Тема по умолчанию
        themes: {
          // --- СВЕТЛАЯ ТЕМА ---
          light: {
            dark: false,
            colors: {
              background: '#F5F5F5', // Нейтральный светло-серый (не слепит как чистый белый)
              surface: '#FFFFFF',    // Карточки и хедер белые
              'surface-bright': '#FFFFFF',
              'surface-light': '#EEEEEE',
              'surface-variant': '#424242',
              'on-surface-variant': '#EEEEEE',

              primary: '#D32F2F',          // Темно-красный (для контраста на белом)
              'primary-darken-1': '#B71C1C',

              secondary: '#616161',        // Нейтральный серый
              'secondary-darken-1': '#424242',

              error: '#B00020',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FB8C00',
            },
          },
          dark: {
            dark: true,
            colors: {
              background: '#121212',
              surface: '#1E1E1E',
              'surface-bright': '#CCBFD6',
              'surface-light': '#333333',
              'surface-variant': '#BDBDBD',
              'on-surface-variant': '#424242',
              primary: '#E53935',
              'primary-darken-1': '#D32F2F',
              secondary: '#757575',
              'secondary-darken-1': '#616161',
              error: '#CF6679',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FB8C00',
            },
            variables: {
              'border-color': '#FFFFFF',
              'border-opacity': 0.12,
              'high-emphasis-opacity': 0.87,
              'medium-emphasis-opacity': 0.60,
              'disabled-opacity': 0.38,
              'idle-opacity': 0.04,
              'hover-opacity': 0.04,
              'focus-opacity': 0.12,
              'selected-opacity': 0.08,
              'activated-opacity': 0.12,
              'pressed-opacity': 0.12,
              'dragged-opacity': 0.08,
              'theme-kbd': '#212529',
              'theme-on-kbd': '#FFFFFF',
              'theme-code': '#F5F5F5',
              'theme-on-code': '#000000',
            }
          }
        }
      }
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    storage: 'localStorage',
    storageKey: 'ota-ku-color-mode'
  },

  compatibilityDate: '2024-07-06',
})