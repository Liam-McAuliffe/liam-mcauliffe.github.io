export const terminal = () => {
  const codeSnippet = document.getElementById('code-snippet');
  const cursor = document.querySelector('.cursor');

  const codeText = `// Click the picture for a surprise!
function greet() {
  console.log("Hello, world!");
}
greet();`;

  let i = 0;
  function typeWriter() {
    if (i < codeText.length) {
      codeSnippet.textContent += codeText.charAt(i);
      i++;
      cursor.style.top = codeSnippet.offsetHeight + 'px';
      setTimeout(typeWriter, 30);
    }
  }

  console.log('Hello, world!');
  typeWriter();
};
