class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=''
        for(let i=0; i<s.length; i++){
            let char=s[i].toLowerCase()
            if((char>="a" && char<="z") || (char>="0" && char <="9")){
                str+=char
            }
        }
        let rev=str.split('').reverse().join('')
        return rev===str
    }
}
