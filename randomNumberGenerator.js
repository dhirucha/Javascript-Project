// Self-invoking arrow function to generate a random number between 1 and 100
const generateRandomNumber = (() => {
    const min = 1;
    const max = 100;
  
    // Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive)
    // Multiply by the range (max - min) and add the minimum value to shift the range
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Log the generated random number to the console
    console.log("Generated Random Number:", randomNumber);
  
    // Return the random number for further use, if needed
    return randomNumber;
  })();
  