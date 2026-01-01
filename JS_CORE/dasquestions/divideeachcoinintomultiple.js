/**
 * Problem Statement
Given n Zeta coins, you can break them down into multiple smaller coins by dividing them with 2, 3, or 4. The goal is to find the maximum possible sum one can get by recursively applying these divisions.

The constraints ensure that n can be very large (n ≤ 10⁹), making recursion inefficient without optimization.

1. Input and Output Format
Input:
A single integer n, where:

1
≤
𝑛
≤
10
9
1≤n≤10 
9
 
Output:
A single integer representing the maximum possible sum that can be obtained.

Example
makefile
Copy
Edit
Input: 12
Output: 13
Explanation:

We can break 12 as 12 → 12/2 + 12/3 + 12/4 = 6 + 4 + 3 = 13.
If we do further breaking, it does not yield a greater sum.
2. Algorithm
Base Case:

If n <= 4, return n, since breaking it further gives a sum smaller than n itself.
Recursive Case:

Calculate break_sum = f(n/2) + f(n/3) + f(n/4), where f(x) is the function to get the max sum.
The answer for n is max(n, break_sum), since we should only break n if it gives a larger value.
Optimization with Memoization:

Since n can be large, we store results in a dictionary (memoization) to avoid recomputation.
If n has been computed before, return the stored value.
3. Approach
We use Recursion with Memoization to avoid redundant calculations.
If n is too large, the recursive calls will significantly reduce it.
The memoized approach ensures that each value is calculated only once
 */

function maxZetaCoins(n, memo = {}) {
    // Base Case: If n is small, return n itself
    if (n <= 4) return n;

    // Check if result is already computed
    if (memo[n] !== undefined) return memo[n];

    // Recursively compute the maximum sum
    let breakSum = maxZetaCoins(Math.floor(n / 2), memo) +
                   maxZetaCoins(Math.floor(n / 3), memo) +
                   maxZetaCoins(Math.floor(n / 4), memo);

    // Store the result in memo and return max of n or breakSum
    memo[n] = Math.max(n, breakSum);
    return memo[n];
}

// Example Usage
const n = parseInt(prompt("Enter a number:")); // Take user input
console.log(maxZetaCoins(n)); // Compute and print result

/**
 * Explanation
Base Case: If n ≤ 4, return n because breaking it further would not increase its value.
Memoization: Store previously computed values in an object (memo) to avoid redundant calculations.
Recursive Calculation:
Compute the maximum sum by recursively dividing n into n/2, n/3, and n/4.
Use Math.floor(n/2), Math.floor(n/3), and Math.floor(n/4) to ensure integer values.
Store the result in memo to optimize subsequent calls.
Return the maximum of n or breakSum since breaking may not always yield a higher sum.
Time & Space Complexity
Time Complexity: O(log n) due to memoization.
Space Complexity: O(log n) for recursion depth and O(n) for memo storage.
Example Runs
Input 1
css
Copy
Edit
Enter a number: 12
Output
Copy
Edit
13
Breakdown:

lua
Copy
Edit
maxZetaCoins(12) = max(12, maxZetaCoins(6) + maxZetaCoins(4) + maxZetaCoins(3))
maxZetaCoins(6) = 6, maxZetaCoins(4) = 4, maxZetaCoins(3) = 3
Total = 6 + 4 + 3 = 13
Edge Cases
Input	Expected Output	Explanation
1	1	No division possible
2	2	No division increases value
7	7	Best sum is itself
24	27	f(24) = f(12) + f(8) + f(6)
100	120	Large value test
10^9	Very large number	Efficient due to memoization
This JavaScript implementation ensures efficiency while keeping the logic clean. 🚀 Would you like any modifications?
 */
