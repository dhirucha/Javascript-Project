function countVowels(name) {
  // Convert the name to lowercase to make the comparison case-insensitive
  name = name.toLowerCase();

  // Initialize a variable to store the count of vowels
  var vowelCount = 0;

  // Iterate through each character in the name
  for (var i = 0; i < name.length; i++) {
    // Check if the current character is a vowel
    if (isVowel(name[i])) {
      // Increment the vowel count
      vowelCount++;
    }
  }

  // Print the result
  console.log("Number of vowels in the name: " + vowelCount);
}

// Function to check if a character is a vowel
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
}

// Example usage
var personName = "John Doe";
countVowels(personName);
