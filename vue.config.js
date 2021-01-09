module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/assets/sass/helpers.sass';`
        // prependData: '@import "@/assets/sass/helpers.sass"' // vue-cli 3.x
      },
      css: {
        sourceMap: true
      }
    }
  }
}
