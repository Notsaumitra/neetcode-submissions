class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bracArr = [];
        for(let i=0; i<s.length; i++){
            if(s[i]=='(' || s[i]=='{' || s[i]=='['){
                bracArr.push(s[i]);
            }else if(i>0 && s[i]==')'){
                const matchBrac = bracArr[bracArr.length-1];
                if(matchBrac=='('){
                    bracArr.pop();
                }else{
                    return false;
                }
            }else if(i>0 && s[i]=='}'){
                const matchBrac = bracArr[bracArr.length-1];
                if(matchBrac=='{'){
                    bracArr.pop();
                }else{
                    return false;
                }
            }else if(i>0 && s[i]==']'){
                const matchBrac = bracArr[bracArr.length-1];
                if(matchBrac=='['){
                    bracArr.pop();
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
        console.log(bracArr);
        return bracArr.length==0;
    }
}
