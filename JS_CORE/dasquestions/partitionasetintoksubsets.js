/**
 * 
 * Given two numbers n and k where n represents a number of elements in a set, find a number of ways to partition the set into k subsets.
Example: 

Input: n = 3, k = 2
Output: 3
Explanation: Let the set be [1, 2, 3], we can partition it into 3 subsets in the following ways [[1,2], [3]],  [[1], [2,3]],  [[1,3], [2]].


Input: n = 3, k = 1
Output: 1
Explanation: There is only one way [[1, 2, 3]].
 */

/**
 * Using Recursion – O(2^n) Time and O(n) Space
We can recursively calculate the number of ways to partition a set of n elements by considering each element and either placing it in an existing subset or creating a new subset. For each element, we calculate the number of ways to partition the remaining n-1 elements into k subsets and then sum these values for all possible k. This gives us the following recurrence relation for Stirling numbers of the second kind:


The previous n – 1 elements are divided into k partitions, i.e S(n-1, k) ways. Put this nth element into one of the previous k partitions. So, count = k * S(n-1, k)
The previous n – 1 elements are divided into k – 1 partitions, i.e S(n-1, k-1) ways. Put the nth element into a new partition ( single element partition). So, count = S(n-1, k-1)
Base case: Return 0 for invalid cases (n == 0, k == 0, or k > n) and 1 for trivial cases (k == 1 or k == n).


Total count = S(n, k) = k * S( n – 1, k) + S(n – 1, k – 1).
 */

// A JavaScript program to count number of partitions
// of a set with n elements into k subsets

// Returns count of different partitions of n
// elements in k subsets
function countP(n, k) {

    // Base cases
    if (n === 0 || k === 0 || k > n) {
        return 0;
    }
    if (k === 1 || k === n) {
        return 1;
    }

    // Recursive formula
    // S(n+1, k) = k*S(n, k) + S(n, k-1)
    return k * countP(n - 1, k) + countP(n - 1, k - 1);
}

let n = 5, k = 2;
console.log(countP(n, k));

/**
 * Using Top-Down DP (Memoization) – O(n * k) Time and O(n * k) Space 
If we notice carefully, we can observe that the above recursive solution holds the following two properties of Dynamic Programming:


1. Optimal Substructure:  The number of ways to partition a set of n elements into k subsets depends on two smaller subproblems:


The number of ways to partition the first n-1 elements into k subsets, and
The number of ways to partition the first n-1 elements into k-1 subsets and then add the new element as its own subset. By combining these optimal solutions, we can efficiently calculate the total number of ways to partition the set.
2. Overlapping Subproblems: In the recursive approach, certain subproblems are recalculated multiple times. For example, when computing S(n, k), the subproblems S(n-1, k) and S(n-1, k-1) are recomputed multiple times. This redundancy leads to overlapping subproblems, which can be avoided using memoization or tabulation. Below is recursion tree of countP(10, 7). The subproblem countP(8,6) or CP(8,6) is called multiple times.

The recursive solution involves two parameters: n (the number of elements) and k (the number of subsets).
We create a 2D memoization table of size (n + 1) x (k + 1) to store results for all combinations of n and k.
We initialize the table with -1 to indicate uncomputed subproblems, we check if the value at memo[n][k] is -1. If it is, we proceed to compute the result. otherwise, we return the stored result.
 */

// JavaScript code to find the total subsets
// using Memoization

// Function to compute Stirling numbers of
// the second kind S(n, k) with memoization
function stirling(n, k, memo) {
  
    // Base cases
    if (n === 0 && k === 0) return 1;
    if (k === 0 || n === 0) return 0;
    if (n === k) return 1;
    if (k === 1) return 1;

    // Check if result is already computed
    if (memo[n][k] !== -1) return memo[n][k];

    // Recursive formula
    memo[n][k] = k * stirling(n - 1, k, memo) + 
    stirling(n - 1, k - 1, memo);
    return memo[n][k];
}

// Function to calculate the total number of 
// ways to partition a set of `n` elements
function countP(n, k) {
  
    // Initialize memoization table with -1
    const memo = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));
    return stirling(n, k, memo);
}

const n2 = 5, k2 = 2;
const result = countP(n, k);
console.log(result);
/***Using Bottom-Up DP (Tabulation) – O(n * k) Time and O(n * k) Space
The approach is similar to the previous one, but instead of solving the problem recursively, we can calculate the solution using a bottom-up dynamic programming approach. We maintain a 2D table dp[][]where dp[i][j] represents the number of ways to partition a set of i elements into j subsets.


Base Case:


For i = 0 and 0 <= j < n, dp[0][j] = 0 (no elements to partition into subsets).
For j = 0 and 0 <= i < n, dp[i][0] = 0(cannot partition i elements into 0 subsets).
For i = j, dp[i][j] = 1(one way to partition i elements into i subsets).
Recursive Case:


For i > 1 and j > 1,
dp[i][j] = j * dp[i-1][j] + dp[i-1][j – 1]
This formula arises from considering two options: either placing the i-th element in one of the existing subsets (which is j * dp[i-1][j]) or placing it in a new subset (dp[i-1][j-1]). */

// A Dynamic Programming based JavaScript program to count
// number of partitions of a set with n elements

// Returns count of different partitions 
// of n elements in k subsets
function countP(n, k) {

    // Table to store results of subproblems
    let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

    // Initialize base cases
    for (let i = 0; i <= n; i++) {
    
        // No way to partition n elements 
        // into 0 subsets if n > 0
        dp[i][0] = 0;
    }

    for (let i = 0; i <= k; i++) {
    
        // 1 way to partition 0 elements
        // into 0 subsets
        dp[0][i] = (i === 0) ? 1 : 0;
    }

    // Fill rest of the entries in 
    // dp[][] in bottom-up manner
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === 1 || i === j) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = j * dp[i - 1][j] + dp[i - 1][j - 1];
            }
        }
    }

    return dp[n][k];
}

const n3 = 5, k4 = 2;
console.log(countP(n, k));
/**
 * Using Space Optimized DP – O(n * k) Time and O(n) Space
In previous approach the current value dp[i][j] is only depend upon the current and previous row values of DP. So to optimize the space complexity we use a single 1D array to store the computations.


Create a 1D vector dp of size n+1.
Set a base case dp[0] = 1 .
Now iterate over subproblems by the help of nested loop and get the current value from previous computations.
Initialize variable prev and temp used to store the previous values from current computations.
After every iteration assign the value of temp to prev  for further iteration.
At last return and print the final answer stored in dp[n].
 */
// JavaScript program to count different 
// partitions of n elements into k subsets

// Returns count of different 
// partitions of n elements in k subsets
function countP(n, k) {

    // Array to store results of subproblems
    let dp = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 1;

    for (let j = 1; j <= k; j++) {

        // Store previous value of dp[i-1]
        let prev = dp[0];
        for (let i = 1; i <= n; i++) {
        
            // Store current value of dp[i]
            let temp = dp[i];

            if (j === 1 || i === j) {
            
                // One way to partition if j == 1 or i == j
                dp[i] = 1;
            } else {
                dp[i] = j * dp[i - 1] + prev;
            }

            // Update prev for next iteration
            prev = temp;
        }
    }

    // Return the final answer 
    // (number of ways to partition n elements)
    return dp[n];
}

console.log(countP(5, 2));