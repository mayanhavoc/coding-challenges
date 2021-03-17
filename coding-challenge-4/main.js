// Create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside the function.
let namesList = ["John", "Mary", "Peter"];

function addName(name) {
  namesList.push("name");

  console.log(`You are number ${namesList.length} on the list`);
}

addName("Paul");
