class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let subStrMap = new Map();

        for(let i=0; i<t.length; i++){
            subStrMap.set(t[i], (subStrMap.get(t[i]) || 0) + 1 );
        }

        let left = 0;
        let ansStr = "";
        let ansStrMap = new Map();
        let validCheckLen = 0;

        for(let i=0; i<s.length; i++){
            ansStrMap.set(s[i], (ansStrMap.get(s[i]) || 0)+1);

            if(subStrMap.has(s[i]) && subStrMap.get(s[i])===ansStrMap.get(s[i])){
                validCheckLen++;
            }

            while(validCheckLen === subStrMap.size){
                let currStrLen = i - left + 1;

                if(!ansStr || currStrLen<ansStr.length){
                    ansStr = s.substring(left, i+1);
                }

                // delete left
                let freq = ansStrMap.get(s[left]);
                if(freq===1){
                    ansStrMap.delete(s[left]);
                }else{
                    ansStrMap.set(s[left], ansStrMap.get(s[left])-1);
                }

                if(subStrMap.has(s[left]) && freq-1 < subStrMap.get(s[left])){
                    validCheckLen--;
                }

                left++;
            }
        }

        return ansStr;
    }
}
