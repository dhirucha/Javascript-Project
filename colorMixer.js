function mixColors(color1, color2) {
    let resultingColor;

    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            resultingColor = "purple";
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            resultingColor = "orange";
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            resultingColor = "green";
            break;
        default:
            resultingColor = "Invalid color combination";
            break;
    }

    return resultingColor;
}

// Example usage:
const color1 = "blue";
const color2 = "yellow";
const result = mixColors(color1, color2);

console.log(result); // Output: "purple"
