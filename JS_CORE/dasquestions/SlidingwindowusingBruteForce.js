function slidingWindowMaxMinBruteForce(arr, k) {
    let maxAns = [], minAns = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let maxVal = arr[i], minVal = arr[i];

        for (let j = i; j < i + k; j++) {
            if (arr[j] > maxVal) maxVal = arr[j];
            if (arr[j] < minVal) minVal = arr[j];
        }

        maxAns.push(maxVal);
        minAns.push(minVal);
    }

    return [maxAns, minAns];
}

// Example usage:
const arr = [1, 4, 2, 5, 6, 4, 6];
const k = 3;
const [maxAns, minAns] = slidingWindowMaxMinBruteForce(arr, k);
console.log("Max:", maxAns); // Output: [4, 5, 6, 6, 6]
console.log("Min:", minAns); // Output: [1, 2, 2, 4, 4]
