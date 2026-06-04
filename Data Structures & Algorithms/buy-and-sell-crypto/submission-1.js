class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice=prices[0]
        let maxProfit=0;

        for(let i=1; i<prices.length; i++){
            let currPrice=prices[i]

            if(currPrice < minPrice){
                minPrice=currPrice
            }else{
                let currProfit=currPrice-minPrice
                maxProfit=Math.max(maxProfit, currProfit)
            }
        }
        return maxProfit
    }
}
