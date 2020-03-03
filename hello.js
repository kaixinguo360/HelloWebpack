export default (name) => {
  const hello = document.createElement('div');
  hello.textContent = `Hello, ${name}`;
  return hello;
}
