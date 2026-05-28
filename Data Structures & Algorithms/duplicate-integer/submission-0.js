class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count={}
        for(let i of nums){
            count[i]=(count[i]||0)+1;

            if(count[i]>1){
                return true
            }
        }
        
        
        return false
    }
}
