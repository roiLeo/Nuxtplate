import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  // important: 'html',
  darkMode: 'class',
  plugins: [
    typography({
      dark: true,
    }),
  ],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.zinc,
      },
    },
  },
})
