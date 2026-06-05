class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0
        let max=0
        let count={}

        for(let right=0; right<s.length; right++){
            let char=s[right]

            if(count[char]!=undefined && count[char]>=left){
                left=count[char]+1
            }
            count[char]=right
            max=Math.max(max, right-left+1)
        }
        return max;
    }
}
