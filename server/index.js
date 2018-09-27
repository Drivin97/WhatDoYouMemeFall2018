//Module management. Need to link math.js to index.js
const math = require('./math');

var sum = math.add(1,2);

console.log("1+2="+sum);