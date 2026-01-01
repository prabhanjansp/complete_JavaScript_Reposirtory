function coinChange(coins, amount) {
    function helper(remaining) {
        if (remaining === 0) return 0;
        if (remaining < 0) return Infinity;
        
        let minCoins = Infinity;
        for (let coin of coins) {
            let res = helper(remaining - coin);
            if (res !== Infinity) {
                minCoins = Math.min(minCoins, res + 1);
            }
        }
        
        return minCoins;
    }
    
    let result = helper(amount);
    return result === Infinity ? -1 : result;
}

// Example usage:
console.log(coinChange([1, 2, 5], 11)); // Output: 3