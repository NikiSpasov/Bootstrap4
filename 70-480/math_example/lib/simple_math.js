//var call_counter = require('./call_counter');
import call_counter from ('./call_counter');

function add(x, y) {
  call_counter();
  return x + y;
}
function subtract(x, y) {
  call_counter();
  return x - y;
}

module.exports = {
  addition: add,
  subtraction: subtract
}