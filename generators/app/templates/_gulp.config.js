module.exports = function(){

  /*
  * Client Files & Folders
  * */
  var clientApp = 'app';
  var sassFolder = clientApp + '/styles/scss';
  var cssFolder = clientApp + '/styles/css';
  var htmlFolder = clientApp + '';
  var fontsFolder = clientApp + '/fonts';
  var imagesFolder = clientApp + '/images';
  var jsFolder = clientApp + '/src';

  /*
  * Server/Prod Files & Folders
  * */
  var serverApp = 'build';

  /*
  * ALL CONFIGS
  * */
  var config = {
    clientApp: clientApp,
    sass: {
      folder: sassFolder
    },
    css: {
      folder: cssFolder
    },
    html: {
      folder: htmlFolder
    },
    fonts: {
      folder: fontsFolder
    },
    images: {
      folder: imagesFolder
    },
    js: {
      folder: jsFolder
    },

    serverApp: serverApp,

    htmlTemplates: './app' + '/**/*.html',
    templateCache: {
      file: 'templates.js',
      options: {
        module: 'app.core',
        root: '',
        standAlone: false
      }
    },
    temp: './.tmp/'
  };

  return config;

};