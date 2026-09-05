class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const strMap = new Map();

        for (let i=0; i<s.length; i++){
            if(strMap.has(s[i])){
                strMap.set(s[i], strMap.get(s[i])+1);
            }else{
                strMap.set(s[i], 1);
            }
        }

        console.log(strMap)

        for (let i=0; i<t.length; i++){
            if(strMap.has(t[i])){
                const lastIndex = strMap.get(t[i]);
                if(lastIndex==1){
                    strMap.delete(t[i])
                }else{
                    strMap.set(t[i], lastIndex-1);
                }
            }else{
                return false;
            }
        }

        return strMap.size==0;
    }
}
