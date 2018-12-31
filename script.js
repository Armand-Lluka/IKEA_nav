const input = document.getElementById("search");
// const data = require("./shop_object.json");

const mockData = {
  chair: [
    { company: "Renberget", type: "swivel chair", price: "49.99" },
    { company: "Stefan", type: "chair", price: "17.99" },
    { company: "Harry", type: "chair", price: "34.99" },
    { company: "Odvar", type: "stool", price: "9.99" },
    { company: "Beachmon Wing", type: "chair", price: "249" },
    { company: "Ekenaset", type: "armchair", price: "179" },
    { company: "Hemstanas", type: "high-back armchair", price: "199" },
    { company: "Ingolf", type: "chair", price: "54.99" },
    { company: "Fanbyn", type: "chair", price: "59.99" },
    { company: "Tobias", type: "chair", price: "59.99" }
  ]
};

input.addEventListener("keyup", function() {
  let userInput = input.value;
  //   console.log(Object.keys(mockData));

  for (let i = 0; i < mockData.chair.length; i++) {
    if (mockData.chair[i].type.indexOf(userInput) > 0) {
    }
  }
});

console.log(data);
