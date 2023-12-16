function calculator(num1, num2, operatorP) {
    let resultP;

    switch (operatorP) {
        case '+':
            resultP = num1 + num2;
            break;
        case '-':
            resultP = num1 - num2;
            break;
        case '*':
            resultP = num1 * num2;
            break;
        case '/':
            // Check for division by zero
            if (num2 !== 0) {
                resultP = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${resultP}`);
}

// Example usage:
const number1 = 10;
const number2 = 5;
const operator = '+';

calculator(number1, number2, operator); // Output: Result: 15
