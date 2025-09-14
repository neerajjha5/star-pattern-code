function sortUniqueArray(arr) {
    // Remove duplicates using a Set, then convert back to array
    let uniqueArr = [...new Set(arr)];

    // Sort the array in ascending order
    uniqueArr.sort((a, b) => a - b);

    return uniqueArr;
}

// Example input
let input = [10, 50, 90, 20, 20, 30, 30];

// Call the function
let result = sortUniqueArray(input);

// Output
console.log("Original array:", input);
console.log("Sorted array without duplicates:", result);

