class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        //zxyz

        const strMap = new Map();
        let left = 0;
        let maxCount = 0;
        for(let i=0; i<s.length; i++){

            if(!strMap.has(s[i])){
                maxCount = Math.max(maxCount, i - left + 1);
            }else{
                const lastInvalid = strMap.get(s[i]);
                if(lastInvalid<left){
                    maxCount = Math.max(maxCount, i - left + 1);
                }else{
                    maxCount = Math.max(maxCount, i - left);
                    left = lastInvalid + 1;
                }
            }
            strMap.set(s[i], i);
        }

        return maxCount;
    }
}
