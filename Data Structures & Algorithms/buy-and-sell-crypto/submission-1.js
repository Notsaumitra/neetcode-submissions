class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        if(prices.length<=1) return 0;

        let maxProfit = 0;
        let buyPrice = prices[0];
        for(let i=1; i<prices.length; i++){
            let profit = prices[i] - buyPrice;
            if(profit>0){
                maxProfit = Math.max(maxProfit, profit);
            }else{
                buyPrice = Math.min(buyPrice, prices[i]);
            }
        }

        return maxProfit;
    }
}
