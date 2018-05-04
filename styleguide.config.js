const { config } = require('rollup-documentation/lib/styleguide.config.js');
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
const { generateCSSReferences, generateJSReferences } = MiniHtmlWebpackPlugin;

module.exports = {
  ...config,
  // start overriding our default configuration here
  components: 'src/**/*.{js,jsx,ts,tsx}',
  serverPort: 9090,
  skipComponentsWithoutExample: true,
  showCode: true,
  template: ({
     css,
     js,
     title,
     publicPath,
  }) => `<!DOCTYPE html>
  <html>
    <head>
     <meta charset="UTF-8">
     <title>${title}</title>
     ${generateCSSReferences(css, publicPath)}
     <style>
        .loader {
          position: absolute;
          top: 50%;
          left: 48%;
        }
    
        .line {
          animation: expand 1.5s ease-in-out infinite;
          border-radius: 10px;
          display: inline-block;
          transform-origin: center center;
          margin: 0 3px;
          width: 1px;
          height: 25px;
        }
    
        .line:nth-child(1) {
          background: #22d4e8;
        }
    
        .line:nth-child(2) {
          animation-delay: 180ms;
          background: #4922e8;
        }
    
        .line:nth-child(3) {
          animation-delay: 360ms;
          background: #bd22e8;
        }
    
        .line:nth-child(4) {
          animation-delay: 540ms;
          background: #e8226a;
        }
    
        .line:nth-child(5) {
          animation-delay: 540ms;
          background: #e86a22;
        }
    
        .line:nth-child(6) {
          animation-delay: 360ms;
          background: #e8de22;
        }
    
        .line:nth-child(7) {
          animation-delay: 180ms;
          background: #8ee822;
        }
    
        .line:nth-child(8) {
          background: #22e853;
        }
    
        @keyframes expand {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(2);
          }
        }
     </style>
     </head>
     <body>
       <div id="rsg-root">
          <div class="loader">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
       </div>
       ${generateJSReferences(js, publicPath)}
     </body>
  </html>`,
};