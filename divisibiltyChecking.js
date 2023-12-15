function printDivisibleBy3(numbers) {
    for (const num of numbers) {
      // Skip numbers divisible by 2
      if (num % 2 === 0) {
        continue;
      }
      // Check if number is divisible by 3
      if (num % 3 === 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printDivisibleBy3(numbers); // Output: 3, 6, 9
  