function maxProfit(prices, n) {
    let buy = prices[0]
    let max_profit = 0
    for (let i = 0; i < n; i++) {
        if (buy > prices[i]) {
            buy = prices[i]
        } else if (max_profit < (prices[i] - buy)) {
            max_profit = prices[i]-buy
        }
    }
    return max_profit
}

let prices = [2, 4, 1, 42, 31, 12, 134]
let n = prices.length
console.log(maxProfit(prices, n))