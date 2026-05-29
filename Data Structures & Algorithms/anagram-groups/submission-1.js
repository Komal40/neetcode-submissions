class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let count={}

        for(let str of strs){
            let sortStr=str.split('').sort().join('')
            if(!count[sortStr]){
                count[sortStr]=[]
            }
            count[sortStr].push(str)
        }
        return Object.values(count);
    }
}
