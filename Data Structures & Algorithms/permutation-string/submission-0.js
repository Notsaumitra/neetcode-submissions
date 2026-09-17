class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let str1Map = new Map();

        for(let i=0; i<s1.length; i++){
            if(str1Map.has(s1[i])){
                str1Map.set(s1[i], str1Map.get(s1[i])+1);
            }else{
                str1Map.set(s1[i], 1);
            }
        }

        let left = 0;
        let str2Map = new Map();
        for(let i=0; i<s2.length; i++){
            if(str2Map.has(s2[i])){
                str2Map.set(s2[i], str2Map.get(s2[i])+1);
            }else{
                str2Map.set(s2[i], 1);
            }

            if(i-left>=(s1.length-1)){
                if(compareMaps(str1Map, str2Map)){
                    return true;
                }else{
                    if(str2Map.get(s2[left])>1){
                        str2Map.set(s2[left], str2Map.get(s2[left])-1);
                    }else{
                        str2Map.delete(s2[left]);
                    }
                    left++;
                }
            }

        }

        function compareMaps(m1,m2){
            if(m1.size!==m2.size) return false;

            for(const[key,value]of m1){
                if(!m2.has(key)) return false;

                const val = m2.get(key);
                if(val!==value) return false;
            }

            return true;
        }

        return false;
    }
}
