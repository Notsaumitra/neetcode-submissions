class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let strMap = new Map();
        for(let i=0; i<s.length; i++){
            let occ = strMap.get(s[i]);
            if(occ){
                strMap.set(s[i],occ+1);
            }else{
                strMap.set(s[i],1);
            }
        }
        for(let i=0; i<t.length; i++){
            let occ = strMap.get(t[i]);
            if(occ){
                if(occ==1){
                    strMap.delete(t[i])
                }else{
                    strMap.set(t[i], occ-1);
                }
            }else{
                return false;
            }
        }

        return strMap.size == 0;
    }
}
