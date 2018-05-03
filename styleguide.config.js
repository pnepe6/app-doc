const { config } = require('rollup-documentation/lib/styleguide.config.js');

module.exports = {
  ...config,
  // start overriding our default configuration here
  components: 'src/**/*.{js,jsx,ts,tsx}',
  serverPort: 9090,
  skipComponentsWithoutExample: true,
  showCode: true,
};