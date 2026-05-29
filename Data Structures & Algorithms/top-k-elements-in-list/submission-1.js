class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count={}
        let res=[]
        for(let i=0; i<nums.length; i++){
            count[nums[i]] = (count[nums[i]] || 0) +1
        }

        let allEntries=Object.entries(count);
        let freqSorted=allEntries.sort((a,b)=>b[1]-a[1])

        for(let i=0;i<k;i++){
            res.push(Number(freqSorted[i][0]))
        }
        return res;
    }
}
