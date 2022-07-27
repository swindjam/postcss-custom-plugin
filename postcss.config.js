const getMediaQueryMixins = require('./postcss/getMediaQueryMixins');

module.exports = () => ({
    plugins: {
        'postcss-mixins': {
            mixins: {
                ...getMediaQueryMixins(),
            }
        },
        'postcss-nested': {},
        autoprefixer: {}
    }
  })