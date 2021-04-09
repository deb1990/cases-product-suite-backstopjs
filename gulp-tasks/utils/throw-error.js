
var colors = require('ansi-colors');
var PluginError = require('plugin-error');

module.exports = throwError;

/**
 * A simple wrapper for displaying errors
 * It converts the tab character to the amount of spaces required to correctly
 * align a multi-line block of text horizontally
 *
 * @param {string} msg to be displayed
 * @throws {Error} of the plugin
 */
function throwError (msg) {
  throw new PluginError('Error', {
    message: colors.red(msg.replace(/\t/g, '    '))
  });
}
