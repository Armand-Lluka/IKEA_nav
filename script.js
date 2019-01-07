/*
 * -------------------------------------------
 * - Define Variable
 * - Focus the input
 * -------------------------------------------
 */

let targetInput = document.getElementById('search'),
  results = document.getElementById('list-container'),
  matches = [];

const mockData = {
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
};

// Search auto selected
targetInput.focus();

targetInput.addEventListener('keyup', function(event) {
  results.innerHTML = '';

  if (this.value.length > 0) {
    matches = getMatches(this.value);

    if (matches.length > 0) {
      displayMatches(matches);
      console.log(results.innerText);
    }
  }
});

// Get matches of user input
const getMatches = input => {
  let matchList = [];

  for (var i = 0; i < mockData.chair.length; i++) {
    if (
      mockData.chair[i].type.toLowerCase().indexOf(input.toLowerCase()) != -1 ||
      mockData.chair[i].company.toLowerCase().indexOf(input.toLowerCase()) != -1
    ) {
      matchList.push(
        mockData.chair[i].type +
          ' -' +
          ' ' +
          mockData.chair[i].company.toLowerCase()
      );

      console.log(targetInput.value);
    }
  }
  return matchList;
};

// DOM Render of the matches as clickable LIs
const displayMatches = matchList => {
  let j = 0;
  let url = 'https://www.ikea.com/at/de/search/products/?q=';

  while (j < matchList.length) {
    results.innerHTML +=
      `<a href="${url + matchList[j]}"> <li class="result">  ` +
      matchList[j] +
      '</li></a>';
    j++;
  }
};
