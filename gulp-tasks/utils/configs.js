const fs = require('fs');
const throwError = require('./throw-error.js');

var BACKSTOP_DIR = '.';
var FILES = {
  siteConfig: 'site-config.json',
  siteConfigSample: 'site-config.json.sample',
  temp: 'backstop.temp.json',
  tpl: 'backstop.tpl.json'
};

module.exports = {
  BACKSTOP_DIR: BACKSTOP_DIR,
  FILES: FILES,
  getSiteConfig: getSiteConfig,
  touchSiteConfigFile: touchSiteConfigFile
};

/**
 * Returns the content of site config file
 *
 * @returns {object} site config object
 */
function getSiteConfig () {
  return JSON.parse(fs.readFileSync(FILES.siteConfig));
}

/**
 * Creates the site config file is in the backstopjs folder, if it doesn't exists yet
 */
function touchSiteConfigFile () {
  try {
    fs.readFileSync(FILES.siteConfig);
  } catch (err) {
    fs.copyFileSync(FILES.siteConfigSample, FILES.siteConfig);

    throwError(
      'No site-config.json file detected!\n' +
      '\tOne has been created for you \n' +
      '\tPlease insert the real value for each placeholder and try again'
    );
  }
}
