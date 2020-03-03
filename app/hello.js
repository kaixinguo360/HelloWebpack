import style from './hello.css';

export default (name) => {
  const hello = document.createElement('div');
  hello.textContent = `Hello, ${name}`;
  hello.className = style['hello-text'];
  return hello;
}

