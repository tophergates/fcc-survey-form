(function() {
  'use strict';

  function handleSubmit(event) {
    event.preventDefault();
    const descEl = document.getElementById('description');
    descEl.style.backgroundColor = '#f66';
    descEl.style.color = '#fff';
    descEl.textContent = 'Form submission prevented. This is just an example.';
  }

  const formEl = document.getElementById('survey-form');
  formEl.addEventListener('submit', handleSubmit);
})();
