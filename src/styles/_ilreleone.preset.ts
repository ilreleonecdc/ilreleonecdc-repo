import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const BrandColorsPreset = definePreset(Aura, {
  primitive: {
    brand: {
      yellow: '#face06',
      red:    '#ce191f',
      blue:   '#2f408c',
      white:  '#e8e8ef',
      brown:  '#4c1b1f',
      orange: '#f88d27'
    }
  },
  semantic: {
    // Imposto primary = blu brand
      primary: {
    50:  '#e9ecf7',
    100: '#d9e0f3',
    200: '#b7c2e7',
    300: '#93a3db',
    400: '#6e84cf',
    500: '#2f408c', // brand
    600: '#2a3a7e',
    700: '#233268',
    800: '#1c2953',
    900: '#151e3e'
  },

  /* SECONDARY — Orange (#f88d27) */
  secondary: {
    50:  '#fff1e3',
    100: '#ffe3c2',
    200: '#ffc88a',
    300: '#ffad52',
    400: '#ff992f',
    500: '#f88d27', // brand
    600: '#e17f23',
    700: '#c06a1d',
    800: '#9b5517',
    900: '#6f3c10'
  },

  /* ACCENT — Red (#ce191f) */
  accent: {
    50:  '#fde9ea',
    100: '#f9c9cb',
    200: '#f39598',
    300: '#ea6a6e',
    400: '#de3d43',
    500: '#ce191f', // brand
    600: '#b5151a',
    700: '#971216',
    800: '#790e11',
    900: '#54090c'
  },

  /* HIGHLIGHT — Yellow (#face06) */
  highlight: {
    50:  '#fff8d9',
    100: '#ffefad',
    200: '#ffe679',
    300: '#ffdb3f',
    400: '#ffd013',
    500: '#face06', // brand
    600: '#e0b705',
    700: '#bb9804',
    800: '#967903',
    900: '#6c5802'
  },

  /* NEUTRAL — dal tuo “white” (#e8e8ef) verso toni più scuri */
  neutral: {
    50:  '#fafafa',
    100: '#f2f2f6',
    200: '#e8e8ef', // brand light
    300: '#d7d7e0',
    400: '#b8b8c6',
    500: '#9a9aab',
    600: '#7b7b8d',
    700: '#5f5f70',
    800: '#424255',
    900: '#262633'
  },

  /* SUPPORT — Brown (#4c1b1f) */
  support: {
    50:  '#f4eaea',
    100: '#e7cccc',
    200: '#d29c9f',
    300: '#b76f75',
    400: '#94484f',
    500: '#4c1b1f', // brand
    600: '#42171a',
    700: '#351315',
    800: '#2a0f10',
    900: '#1f0a0b'
  },

    // Colori per stati
    danger: {
      color: '{brand.red}'
    },
    warning: {
      color: '{brand.yellow}'
    },

    // Surface / sfondo / contenuto
    colorScheme: {
      light: {
        surface: {
          0:   '{brand.white}',
          50:  '{brand.white}',
          100: '{brand.white}'
        },
        content: {
          text: '#1b1b1f',
          textWeak: '#5c5f66'
        }
      },
      dark: {
        surface: {
          0:   '#121316',
          50:  '#17191d',
          100: '#1c1e23'
        },
        content: {
          text: '#e8eaed',
          textWeak: '#b9bdc6'
        }
      }
    }
  }
});

export default BrandColorsPreset;
