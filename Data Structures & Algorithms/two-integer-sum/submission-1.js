class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count={}

        for(let i=0; i<nums.length; i++){
            let complement = target - nums[i]
            if(count[complement] != undefined){
                return [count[complement],i]
            }
            count[nums[i]]=i
        }
    }
}
