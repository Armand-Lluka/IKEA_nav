/*
 * -------------------------------------------
 * - Define Variable
 * - Focus the input
 * -------------------------------------------
 */

// mockData = {
//   chair: [
//     { company: 'Renberget', type: 'swivel chair', price: '49.99' },
//     { company: 'Stefan', type: 'chair', price: '17.99' },
//     { company: 'Harry', type: 'chair', price: '34.99' },
//     { company: 'Odvar', type: 'stool', price: '9.99' },
//     { company: 'Beachmon Wing', type: 'chair', price: '249' },
//     { company: 'Ekenaset', type: 'armchair', price: '179' },
//     { company: 'Hemstanas', type: 'high-back armchair', price: '199' },
//     { company: 'Ingolf', type: 'chair', price: '54.99' },
//     { company: 'Fanbyn', type: 'chair', price: '59.99' },
//     { company: 'Tobias', type: 'chair', price: '59.99' }
//   ]
//  }
let targetInput = document.getElementById('search'),
  results = document.getElementById('list-container'),
  mockData = ['Albania', 'Bahrain', 'Croatia', 'Denmark', 'Egypt'],
  matches = [];

targetInput.focus();

targetInput.addEventListener('keyup', function(event) {
  /*
   * Key Codes
   * Enter: 13
   * Arrow up: 38
   * Arrow down: 40
   */

  results.innerHTML = '';
  toggleResults('hide');

  if (this.value.length > 0) {
    matches = getMatches(this.value);

    if (matches.length > 0) {
      displayMatches(matches);
    }
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

const getMatches = input => {
  let matchList = [];

  for (var i = 0; i < mockData.length; i++) {
    if (
      mockData[i].toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) != -1
    ) {
      matchList.push(mockData[i]);
    }
  }
  return matchList;

  // for (var i = 0; i < mockData.chair.length; i++) {
  //   if (
  //     mockData.chair[i].type.toLowerCase().indexOf(input.toLowerCase()) != -1
  //   ) {
  //     matchList.push(mockData.chair[i].type);
  //   }
  // }
};

const displayMatches = matchList => {
  let j = 0;

  while (j < matchList.length) {
    results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
    j++;
  }
  toggleResults('show');
};
