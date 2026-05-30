class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr=new Array(nums.length)
        arr[0]=1
        for(let i=1; i<nums.length; i++){
            arr[i] = arr[i-1] * nums[i-1]
        }
        let rightNum=1;
        for(let i=nums.length-1; i>=0; i--){
            arr[i]=arr[i]*rightNum;
            rightNum=rightNum*nums[i]
        }
        return arr;
    }
}
