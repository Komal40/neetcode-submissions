class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=-1;
        let left=0;
        let right=heights.length-1

        while(left<right){
            let width=right-left
            let height=Math.min(heights[left], heights[right])
            let area=width*height
            max=Math.max(area,max)

            if(heights[left] < heights[right]){
                left++
            }else{
                right--
            }
        }
        return max;
    }
}
