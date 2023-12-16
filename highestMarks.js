function findHighestMarks(marks) {
    let highestMarks = 0;

    marks.forEach(mark => {
        highestMarks = mark > highestMarks ? mark : highestMarks;
    });

    return highestMarks;
}

// Example usage:
const studentMarks = [78, 92, 84, 89, 95];
const highest = findHighestMarks(studentMarks);

console.log(`The highest marks in the class are: ${highest}`);
