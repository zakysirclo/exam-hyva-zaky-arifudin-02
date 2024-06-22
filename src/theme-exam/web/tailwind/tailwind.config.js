const {
  spacing
} = require('tailwindcss/defaultTheme');

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    container: {
      screens: {
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    extend: {
      screens: {
        '2xs-max': {'max': '365px'},
        // => @media (max-width: 365px) { ... }
        'xs-max': {'max': '425px'},
        // => @media (max-width: 425px) { ... }
        'sm-max': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'md-max': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
        'md-range': {'min': '768px', 'max': '1279px'},        
        'mgz-mobile': '576px'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#121212",
        },
        primary: {
          50: "#eaedff",
          100: "#bfc8ff",
          200: "#a0aeff",
          300: "#7489fe",
          400: "#5972fe",
          500: "#304ffe",
          600: "#2c48e7",
          700: "#2238b4",
          800: "#1a2b8c",
          900: "#14216b",
          lighter: "#bfc8ff",
          // "DEFAULT": "#304ffe",
          "DEFAULT": "#633bb5",
          darker: "#14216b"
        },
        secondary: {
          50: "#f7f6fd",
          100: "#eceafb",
          200: "#e0dcf9",
          300: "#c7bff3",
          400: "#ab99eb",
          500: "#8c70e1",
          600: "#7c53d5",
          700: "#633bb5",
          800: "#4c2d8b",
          900: "#3e266e",
          lighter: "#7c53d5",
          "DEFAULT": "#633bb5",
          darker: "#4c2d8b"
        },
        neutral: {
          50: '#ebecee',
          100: '#c1c4c9',
          200: '#a3a8af',
          300: '#79808a',
          400: '#5f6774',
          500: '#374151',
          600: '#323b4a',
          700: '#272e3a',
          800: '#1e242d',
          900: '#171b22',
          lighter: "#4b5563",
          "DEFAULT": "#374151",
          darker: "#1f2937"
        },
        background: {
          lighter: colors.blue['100'],
          "DEFAULT": colors.blue['200'],
          darker: colors.blue['300']
        },
        red: {
          50: "#fce9e9",
          100: "#f4bcbc",
          200: "#ef9b9b",
          300: "#e86e6e",
          400: "#e35151",
          500: "#dc2626",
          600: "#c82323",
          700: "#991b1b",
          800: "#791515",
          900: "#5c1010",
          lighter: "#ef9b9b",
          "DEFAULT": "#dc2626",
          darker: "#791515"
        },
        yellow: {
          50: '#fef5e7',
          100: '#fce1b3',
          200: '#fad28f',
          300: '#f8be5c',
          400: '#f7b13c',
          500: '#f59e0b',
          600: '#df900a',
          700: '#ae7008',
          800: '#875706',
          900: '#674205',
          lighter: "#fbbf24",
          "DEFAULT": "#f59e0b",
          darker: "#d97706"
        },
        green: {
          50: '#e6faeb',
          100: '#b0efc0',
          200: '#8ae8a2',
          300: '#54dd78',
          400: '#33d65d',
          500: '#00cc35',
          600: '#059669',
          700: '#009126',
          800: '#00701d',
          900: '#005616',
          lighter: "#54dd78",
          "DEFAULT": "#00cc35",
          darker: "#00701d"
        },
        purple: colors.violet
      },
      textColor: {
        orange: colors.orange,
      },
      backgroundColor: {
        container: {
          lighter: '#ffffff',
          "DEFAULT": '#fafafa',
          darker: '#f5f5f5'
        }
      },
      borderColor: {
        container: {
          lighter: '#f5f5f5',
          "DEFAULT": '#e7e7e7',
          darker: '#b6b6b6'
        }
      },
      width: {
        'pc-desktop': '292px',
        'pc-tablet': '233px',
        'pc-mobile': '164px',
        'sf-tablet': '396px',
        'sf-mobile': '320px',
        'slider-blog-desktop': '288px',
        'slider-blog-tablet': '226px',
        'slider-blog-mobile': '226px',
      },
      height: {
        'slider-blog-desktop-image': '200px',
        'slider-blog-tablet-image': '150px',
        'slider-blog-mobile-image': '150px',
      },
      minWidth: {
        8: spacing["8"],
        20: spacing["20"],
        40: spacing["40"],
        48: spacing["48"],
        'pc-desktop': '288px',
        'pc-tablet': '229px',
        'pc-mobile': '160px'
      },
      minHeight: {
        14: spacing["14"],
        a11y: '44px',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      maxHeight: {
        '0': '0',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '2.5rem',
        },
      },
      fontSize: {
        xs: ['10px', {
          lineHeight: '12px'
        }],
        sm: ['12px', {
          lineHeight: '16px'
        }],
        base: ['14px', {
          lineHeight: '20px'
        }],
        md: ['14px', {
          lineHeight: '20px'
        }],
        lg: ['16px', {
          lineHeight: '24px'
        }],
        xl: ['18px', {
          lineHeight: '28px'
        }],
        '2xl': ['20px', {
          lineHeight: '28px'
        }],
        '3xl': ['24px', {
          lineHeight: '32px'
        }],
        '4xl': ['30px', {
          lineHeight: '36px'
        }],
        '5xl': ['36px', {
          lineHeight: '40px'
        }],
        '6xl': ['48px', {
          lineHeight: '64px'
        }],
        '7xl': ['60px', {
          lineHeight: '72px'
        }],
        '8xl': ['72px', {
          lineHeight: '96px'
        }],
        '9xl': ['96px', {
          lineHeight: '128px'
        }],
        '10xl': ['128px', {
          lineHeight: '160px'
        }],
      },
      boxShadow: {
        'sm': '0px 1px 2px 0px rgba(17, 24, 39, 0.05)',
        'DEFAULT': '0px 1px 2px 0px rgba(17, 24, 39, 0.06), 0px 1px 3px 0px rgba(17, 24, 39, 0.1)',
        'md': '0px 2px 4px -1px rgba(17, 24, 39, 0.06), 0px 4px 6px -1px rgba(17, 24, 39, 0.1)',
        'lg': '0px 4px 6px -2px rgba(17, 24, 39, 0.05), 0px 10px 15px -3px rgba(17, 24, 39, 0.1)',
        'xl': '0px 10px 10px -5px rgba(17, 24, 39, 0.04), 0px 20px 25px -5px rgba(17, 24, 39, 0.1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addUtilities }) => {
      addUtilities({
          '.scrollbar-none': {
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
          },
          '.scrollbar-none::-webkit-scrollbar': {
              display: 'none',
          },
      });
  }),
  ],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    '../../../../../../../vendor/hyva-themes/magento2-magezon-blog/**/*.phtml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    '../../../../../../../app/code/**/*.phtml',
    // project-level phtml files
    '../../../../../../../vendor/icube-mage/**/*.phtml', 
    // parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/icubebysirclo/modules-swift-hyva/src/theme-frontend-swift-hyva/**/*.phtml',
    '../../../../../../../vendor/icubebysirclo/modules-swift-hyva/src/theme-frontend-swift-hyva/*/layout/*.xml',
    '../../../../../../../vendor/icubebysirclo/modules-swift-hyva/src/theme-frontend-swift-hyva/*/page_layout/override/base/*.xml',
    '../../../../../../../vendor/icubebysirclo/modules-swift-hyva/src/theme-frontend-swift-hyva/**/*.phtml',
  ]
});