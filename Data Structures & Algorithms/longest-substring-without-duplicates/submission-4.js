class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;

        let strSet = new Set();

        for(let i=0; i<s.length; i++){
            while(strSet.has(s[i])){
                strSet.delete(s[left]);
                left++;
            }
            strSet.add(s[i]);
            let len = i - left + 1;
            maxLength = Math.max(maxLength, len);
        }


        return maxLength;
    }
}
