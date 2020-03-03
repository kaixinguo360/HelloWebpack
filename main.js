const hello = require('./hello.js');
const config = require('./config.json');
document.querySelector('#root').appendChild(hello(config.name));
