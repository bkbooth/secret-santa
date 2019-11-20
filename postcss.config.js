module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 3 }),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./pages/**/*.js', './components/**/*.js'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
          require('cssnano'),
        ]
      : []),
  ],
};
