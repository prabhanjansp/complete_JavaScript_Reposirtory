function isInterleave(s1, s2, s3) {
    function helper(i, j, k) {
        // Base case: if all strings are exhausted
        if (i === s1.length && j === s2.length && k === s3.length) {
            return true;
        }
        
        // If s3 is exhausted but s1 or s2 is not, return false
        if (k === s3.length) {
            return false;
        }
        
        // Check if s1[i] matches s3[k] and recurse
        if (i < s1.length && s1[i] === s3[k]) {
            if (helper(i + 1, j, k + 1)) {
                return true;
            }
        }
        
        // Check if s2[j] matches s3[k] and recurse
        if (j < s2.length && s2[j] === s3[k]) {
            if (helper(i, j + 1, k + 1)) {
                return true;
            }
        }
        
        return false;
    }
    
    // Edge case: lengths must match
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    
    return helper(0, 0, 0);
}

// Example usage:
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // true
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // false
