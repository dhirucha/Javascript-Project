function capitalizeFirstName(name) {
    // Check if the first letter is lowercase using the ternary operator
    const modifiedName = name.charAt(0).toUpperCase() + name.slice(1);

    return modifiedName;
}

// Example usage:
const userInput = "dheeraj";
const result = capitalizeFirstName(userInput);

console.log(result); // Output: "Dheeraj"
