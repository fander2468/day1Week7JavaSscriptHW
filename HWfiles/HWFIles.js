//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dogString, dogNames) {
  for (let i = 0; i < dogNames.length; i++) {
    if (dogNames[i] === dogString.search(dogNames[i])) {
      return `Matched: ${dog_names[i]}`;
    } else {
      return "No Match";
    }
  }
}
console.log(findWords(dog_string, dog_names));

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
function replaceEvens(arr) {
  //code goes here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1, "even index");
    }
  }
  return arr;
}
console.log(replaceEvens(arr));
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
