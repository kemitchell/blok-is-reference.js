var isSHA256Hex = require('is-sha-256-hex-digest')

function blokIsReference(argument) {
  return (
    typeof argument === 'string' &&
    argument.charAt(0) === '#' &&
    isSHA256Hex(argument.slice(1)) ) }

module.exports = blokIsReference
