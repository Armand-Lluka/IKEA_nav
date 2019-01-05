/*
 * -------------------------------------------
 * - Define Variable
 * - Focus the input
 * -------------------------------------------
 */

const targetInput = document.getElementById('search'),
  results = document.getElementById('list-container'),
  mockData = {
    chair: [
      { company: 'Renberget', type: 'swivel chair', price: '49.99' },
      { company: 'Stefan', type: 'chair', price: '17.99' },
      { company: 'Harry', type: 'chair', price: '34.99' },
      { company: 'Odvar', type: 'stool', price: '9.99' },
      { company: 'Beachmon Wing', type: 'chair', price: '249' },
      { company: 'Ekenaset', type: 'armchair', price: '179' },
      { company: 'Hemstanas', type: 'high-back armchair', price: '199' },
      { company: 'Ingolf', type: 'chair', price: '54.99' },
      { company: 'Fanbyn', type: 'chair', price: '59.99' },
      { company: 'Tobias', type: 'chair', price: '59.99' }
    ]
  },
  matches = [];

targetInput.focus();

targetInput.addEventListener('keyup', e => {
  /*
   * Key Codes
   * Enter : 13
   * Arrow up: 38
   * Arrow down: 40
   */

  results.innerHTML = '';
  toggleResults('Hide');

  if (this.value.length > 0) {
    matches = getMatches(this.value);
  }
});

// A function that toggles the result list
const toggleResults = a => {
  if (a == 'show') {
    results.classList.add('visible');
  } else if (a == 'hide') {
    results.classList.remove('visible');
  }
};
