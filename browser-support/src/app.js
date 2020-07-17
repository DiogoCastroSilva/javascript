// Adding polyfill for promises manually
// import 'core-js/features/promise';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;

  // Navigator not always available
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert('Feature not available! Please copy manually.');
  }
  
});