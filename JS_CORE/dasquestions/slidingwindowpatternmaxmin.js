
/**
 * Given an array of numbers of size n, find maximum and minimum number in a subarray of size k.


Example:


Input: arr = [1,4,2,5,6,4,6] k = 3


Output : maxAns = [4,5,6,6,6]
Output: minAns = [1,2,2,4,4]
 */
function slidingWindowMaxMin(arr, k) {
    if (!arr.length || k === 0) return [[], []];

    let maxDeque = [], minDeque = [];
    let maxAns = [], minAns = [];

    for (let i = 0; i < arr.length; i++) {
        // Remove elements not within the window
        if (maxDeque.length && maxDeque[0] <= i - k) maxDeque.shift();
        if (minDeque.length && minDeque[0] <= i - k) minDeque.shift();

        // Maintain decreasing order for maxDeque
        while (maxDeque.length && arr[maxDeque[maxDeque.length - 1]] <= arr[i]) {
            maxDeque.pop();
        }
        maxDeque.push(i);

        // Maintain increasing order for minDeque
        while (minDeque.length && arr[minDeque[minDeque.length - 1]] >= arr[i]) {
            minDeque.pop();
        }
        minDeque.push(i);

        // Store results after first k elements
        if (i >= k - 1) {
            maxAns.push(arr[maxDeque[0]]);
            minAns.push(arr[minDeque[0]]);
        }
    }

    return [maxAns, minAns];
}

// Example usage:
const arr = [1, 4, 2, 5, 6, 4, 6];
const k = 3;
const [maxAns, minAns] = slidingWindowMaxMin(arr, k);
console.log("Max:", maxAns); // Output: [4, 5, 6, 6, 6]
console.log("Min:", minAns); // Output: [1, 2, 2, 4, 4]