class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0) return 0;

        let set=new Set(nums)
        let max=0;
        
        for(let n of nums){
            if(!set.has(n-1)){
                let currNum=n
                let currStreak=1

                while(set.has(currNum+1)){
                    currNum+=1
                    currStreak+=1
                }
                max=Math.max(max, currStreak)
            }
        }
        return max
    }
}
