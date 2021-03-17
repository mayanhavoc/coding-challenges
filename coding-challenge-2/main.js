// Create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert 'WINNER'!

function numString(num, string) {
  if (string.length * Number(num) > 100) {
    alert("WINNER!");
  }
}
numString(101, "word");
