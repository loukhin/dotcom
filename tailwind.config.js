module.exports = {
    purge: {
        content: ['./components/*.tsx', './pages/*.tsx', './out/index.html'],
        options: {
            safelist: [/^bg-/, /^w-/, /^h-/, /^w-flex-/]
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                76: '19rem',
                'flex-1/2': 'calc(50% - 1rem)',
                'flex-1/4': 'calc(25% - 1rem)',
                'flex-2/3': 'calc(66.666667% - 1rem)',
                'flex-1/3': 'calc(33.333333% - 1rem)'
            },
            height: {
                76: '19rem'
            },
            padding: {
                'flex-1/2': 'calc(50% - 1rem)',
                'flex-1/4': 'calc(25% - 1rem)',
                'flex-2/3': 'calc(66.666667% - 1rem)',
                'flex-1/3': 'calc(33.333333% - 1rem)'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
