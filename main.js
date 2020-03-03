import hello from './hello.js';
import config from './config.json';

document.querySelector('#root').appendChild(hello(config.name));
