module.exports = {
    webpack: config => {
        // disable soucemaps of babel-loader
        for (const r of config.module.rules) {
            if (r.loader === 'babel-loader') {
                r.options.sourceMaps = false
            }
        }
        return config
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        }
    }
}
