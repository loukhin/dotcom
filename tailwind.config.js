module.exports = {
    purge: {
        content: ['./components/*.jsx', './pages/*.jsx', './out/index.html'],
        options: {
            safelist: [/^bg-/, /^w-/, /^h-/]
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                76: '19rem',
                'flex-1/2': 'calc(50% - 1rem)',
                'flex-1/4': 'calc(25% - 1rem)'
            },
            height: {
                76: '19rem'
            },
            padding: {
                'flex-1/2': 'calc(50% - 1rem)',
                'flex-1/4': 'calc(25% - 1rem)'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
