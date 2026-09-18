class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;

        let ans = 0;

        let strMap = new Map();

        for(let i=0; i<s.length; i++){
            if(strMap.has(s[i])){
                strMap.set(s[i], strMap.get(s[i])+1);
            }else{
                strMap.set(s[i], 1);
            }

            let maxCharFreq = 0;
            for(const [key,value] of strMap){
                maxCharFreq = Math.max(maxCharFreq, value)
            }

            if((i - left + 1 - maxCharFreq)>k){
                // window invalid so calculate new left, no need to calculate answer, already calculated for valid window
                // "AAABABB" AAABA
                // AAABAB maxCharFreq = 4, l = 6, 6-4>k
                // why in while maxCharFreq doesnt changes?

                while((i - left + 1 - maxCharFreq)>k){
                    let val = strMap.get(s[left]);
                    if(val>1){
                        strMap.set(s[left], val - 1);
                    }else{
                        strMap.delete(s[left]);
                    }
                    left++;
                }
            }else{
                ans = Math.max(ans, i - left + 1);
            }

        }

        return ans;
    }
}
