module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  prefix: 'dvs-',
  darkMode: false, // or 'media' or 'class'
  important: '#devise-administration',
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.65rem',
      },
      colors: {
        'admin-bg': 'rgba(34,44,73,0.9)',
        'admin-fg': '#CDC9F1',
        'admin-secondary-bg': 'rgba(24,32,57,0.5)',
        'admin-secondary-fg': 'rgba(255,255,255,0.8)',
        'admin-highlight-bg': '#EB8F89',
        'admin-highlight-fg': '#ffffff',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        9980: '9980',
        9999: '9999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
