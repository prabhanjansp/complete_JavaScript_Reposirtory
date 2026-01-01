/**
 * Given an array of strings arr[], the task is to return the longest common prefix among each and every strings present in the array. If there’s no prefix common in all the strings, return “”.

Examples:

Input: arr[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
Output: “gee”
Explanation: “gee” is the longest common prefix in all the given strings: “geeksforgeeks”, “geeks”, “geeks” and “geezer”.

Input: arr[] = [“apple”, “ape”, “april”]
Output : “ap”
Explanation: “ap” is the longest common prefix in all the given strings: “apple”, “ape” and “april”.

Input: arr[] = [“hello”, “world”]
Output: “”
Explanation: There’s no common prefix in the given strings.

Approach:

The idea is to sort the array of strings and find the common prefix of the first and last string of the sorted array. Sorting is used in this approach because it makes it easier to find the longest common prefix. When we sort the strings, the first and last strings in the sorted list will be the most different from each other in terms of their characters. So, the longest common prefix for all the strings must be a prefix of both the first and the last strings in the sorted list.

Illustration:

Given array of strings is [“geeksforgeeks”, “geeks”, “geek”, “geezer”].
After sorting it becomes [“geek” ,”geeks” ,”geeksforgeeks” ,”geezer”].
Now, to find the longest common prefix, we only need to compare the first and last strings (“geek” and “geezer“) because any common prefix between these two will also be a prefix for all the strings in between.
In this case, the common prefix between “geek” and “geezer” is “gee“, which is the longest common prefix for all the strings.
 */

// JavaScript program to find the longest common prefix
// using Sorting

function longestCommonPrefix(arr){

    // Sort the array of strings
    arr.sort();

    // Get the first and last strings after sorting
    let first = arr[0];
    let last = arr[arr.length - 1];
    let minLength = Math.min(first.length, last.length);

    let i = 0;
    
    // Find the common prefix between the first and 
    // last strings
    while (i < minLength && first[i] === last[i]) {
        i++;
    }

    // Return the common prefix
    return first.substring(0, i);
}

// Driver Code
let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr) );

/**
 * Time Complexity: O(n*m*log n), to sort the array, where n is the number of strings and m is the length of longest string.
Auxiliary Space: O(m) to store the strings first, last and result.
 */