class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let subStrMap = new Map();

        for(let i=0; i<t.length; i++){
            subStrMap.set(t[i], (subStrMap.get(t[i]) || 0)+1);
        }

        let ansStr = "";
        let left = 0;

        let strMap = new Map();

        for(let i=0; i<s.length; i++){
            strMap.set(s[i], (strMap.get(s[i]) || 0)+1);

            while(isStrMap(subStrMap, strMap)){
                let currLen = i - left + 1;
                if(ansStr.length===0 || currLen < ansStr.length) ansStr = s.substring(left, i+1);

                let freq = strMap.get(s[left]);
                if(freq===1){
                    strMap.delete(s[left]);
                }else{
                    strMap.set(s[left], freq-1);
                }
                left++;
            }
        }

        function isStrMap(subMap, sMap){
            for(const [key,value] of subMap){
                if(!sMap.has(key) || sMap.get(key) < value) return false;
            }

            return true;
        }


        return ansStr;
    }
}
