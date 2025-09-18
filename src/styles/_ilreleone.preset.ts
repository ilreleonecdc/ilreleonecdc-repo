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
      50:  '{brand.blue}',  // o se preferisci sfumature leggere sviluppate
      100: '{brand.blue}',
      200: '{brand.blue}',
      300: '{brand.blue}',
      400: '{brand.blue}',
      500: '{brand.blue}',   // brand
      600: '{brand.blue}',
      700: '{brand.blue}',
      800: '{brand.blue}',
      900: '{brand.blue}',
      950: '{brand.blue}'
    },

    // Colori per stati
    danger: {
      color: '{brand.red}'
    },
    warning: {
      color: '{brand.yellow}'
    },
    accent: {
      color: '{brand.orange}'
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
