function coinChange(coins, amount) {
    if (amount === 0) return 0;

    let queue = [];
    let visited = new Set();
    queue.push([0, 0]); // [currentAmount, steps]

    while (queue.length > 0) {
        let [currAmount, steps] = queue.shift();

        for (let coin of coins) {
            let newAmount = currAmount + coin;
            if (newAmount === amount) return steps + 1;
            if (newAmount < amount && !visited.has(newAmount)) {
                visited.add(newAmount);
                queue.push([newAmount, steps + 1]);
            }
        }
    }

    return -1; // No solution found
}

// Example Usage
console.log(coinChange([1, 2, 5], 11)); // Output: 3
