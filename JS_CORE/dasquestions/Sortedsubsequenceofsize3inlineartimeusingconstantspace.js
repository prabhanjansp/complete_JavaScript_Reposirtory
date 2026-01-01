/**
 * Given an array, the task is to find three elements of this array such that they are in sorted form i.e. for any three elements a[i], a[j] and a[k], they follow this relationship: a[i] < a[j] < a[k] where i < j < k. This problem must be solved using constant space or no extra space.

This problem is already solved in linear time using linear space: Find a sorted sub-sequence of size 3 in Linear Time

Examples: 

Input: arr[] = {12, 11, 10, 5, 2, 6, 30} 
Output: 5 6 30 
        or 2 6 30
Explanation: Answer is 5, 6, 30 because 5 < 6 < 30 
and they occur in this sequence in the array.

Input: arr[] = {5, 7, 4, 8}
Output: 5 7 8
Explanation: Answer is 5 ,7 ,8 because 5 < 7 < 8 
and they occur in the same sequence in the array 
Solution: The objective is to find three elements a, b, and c such that a < b < c, and the elements must occur in the same sequence in the array.

Approach: The problem deals with finding three elements a, b, c where a < b < c and they must appear in the same order as in the array. So the intuition at any step must be followed as such. One of the variable (small) should store the smallest element of the array, and the second variable large will be assigned a value when there is already a smaller value present in the (small) variable. This will lead to the formation of a pair of two variables which will form the first two elements of the required sequence. Similarly, if another value can be found in the array that is assigned when the first two variables are already assigned and has a smaller value than the present element the search for the third value would be complete. This completes the triplet a, b and c such that a < b < c, in similar sequence to the array.


Algorithm 



Create three variables, small– Stores the smallest element,large– stores the second element of the sequence, i– loop counter

Move along the input array from start till end.

If the present element is smaller than or equal to variable small, update the variable.

Else if the present element is smaller than or equal to variable large, update the variable. So here we get a pair (small, large) at this instant, where small < large and they occur in the required sequence.

Else if the previous two cases fail to match, break the loop as we have got a pair where the present element is greater than both variables small and large. Store the index in variable i.

If the break statement has not been encountered then it is guaranteed that no such triplet exists.

Else there is a triplet satisfies the criteria but the variable small might have been updated to a new smaller value.

So Traverse the array from start to index i.

Re-assign the variable small to any element less than large, it is guaranteed that there exists one.

Print the values small, large and ith array element

 */


// JavaScript program to find a 
    // sorted sub-sequence of 
    // size 3 using constant space 
      
    // A function to fund a sorted sub-sequence 
    // of size 3 
    function find3Numbers(arr, n) 
    { 
            
        // Initializing small and large(second smaller) 
        // by INT_MAX 
        let small = +2147483647, large = +2147483647; 
        let i; 
        for (i = 0; i < n; i++) 
        { 
                
            // Update small for smallest value of array 
            if (arr[i] <= small) 
                small = arr[i]; 
        
            // Update large for second smallest value of 
            // array after occurrence of small 
            else if (arr[i] <= large) 
                large = arr[i]; 
        
            // If we reach here, we found 3 numbers in 
            // increasing order : small, large and arr[i] 
            else
                break; 
        } 
        
        if (i == n) 
        { 
            document.write("No such triplet found"); 
            return; 
        } 
        
        // last and second last will be same, but first 
        // element can be updated retrieving first element 
        // by looping upto i 
        for (let j = 0; j <= i; j++) 
        { 
            if (arr[j] < large) 
            { 
                small = arr[j]; 
                break; 
            } 
        } 
        
        document.write(small + " " + large + " " + arr[i]); 
        return; 
    } 
      
    let arr = [5, 7, 4, 8]; 
    let n = arr.length; 
    find3Numbers(arr, n); 

    /**
     * 5 7 8
Complexity Analysis: 

Time Complexity: O(n). 
As the array is traversed only twice, the time complexity is O(2*n) which is equal to O(n).
Space Complexity: O(1). 
Since only three elements are stored, the space complexity is constant or O(1).
     */
      