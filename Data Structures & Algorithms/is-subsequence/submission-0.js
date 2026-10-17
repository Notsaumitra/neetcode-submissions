class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {


        let left = 0;


        for (let i=0; i<t.length; i++){
            if(s[left]===t[i]){
                left++;
            }
        }


        return left===s.length;
    }
}
