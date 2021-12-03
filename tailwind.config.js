module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				base: '#ffffff',
				background: '#FDFDFD',
				primary: {
					DEFAULT: '#7D5A50',
					lighter: '#B4846C',
				},
				secondary: {
					DEFAULT: '#FCDEC0',
					darker: '#E5B299',
				},
				accent: '#FF5B14',
				info: '#2DA7FB',
				warning: '#FFCB11',
				danger: '#ec4141',
				success: '#67db8e',
			},
			fontFamily: {
				main: 'Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
			},
			fontSize: {
				'4.5xl': '2.73rem',
			},
			maxWidth: {
				'sm/lg': '29rem',
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
