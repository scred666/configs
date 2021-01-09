const path = require('path')
const rootPath = path.resolve(__dirname, '../src')
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|vue)',
    '../src/**/story.@(js|jsx|ts|tsx|vue)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true,
            data: `@import '@/assets/sass/helpers.sass';`,
            // sass-loader version >= 8
            sassOptions: {
              indentedSyntax: true
            }
          }
        }
      ]
    })
    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath
    return config
  }
}
