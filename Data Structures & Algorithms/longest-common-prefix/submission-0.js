class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let opStr = "";
        if(!strs.length) return opStr;
        let compareStr = strs[0];
        for(let i=0; i<compareStr.length; i++){
            for(let j=1; j<strs.length; j++){
                if(strs[j][i]!=compareStr[i]){
                    return opStr;
                }
            }
            opStr += compareStr[i];
        }


        return opStr;
    }
}
