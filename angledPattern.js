function printInvertedTriangle(i) {
    for (let row = i; row >= 1; row--) {
        let rowOutput = '';
        
        // Add spaces before asterisks
        for (let space = 0; space < i - row; space++) {
            rowOutput += ' ';
        }

        // Add asterisks for the current row
        for (let asterisk = 0; asterisk < row; asterisk++) {
            rowOutput += '*';
        }

        console.log(rowOutput);
    }
}

// Example: Input 6
const userInput = 6;
printInvertedTriangle(userInput);
