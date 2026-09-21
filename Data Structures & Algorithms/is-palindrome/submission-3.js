class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let right = s.length - 1;
        let left = 0;

        while(left<=right){
            console.log("left", left, "right", right, "ouytttt")
            let found = false;
            if(((s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57) || (s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 58))){
                if(s[left] !== s[right]){
                console.log("left", left, "right", right, "mmmm")
                return false;
                }else{
                    left++;
                    right--;
                    continue;
                }
            }
            if (!((s.charCodeAt(left) >= 65 && s.charCodeAt(left) < 91) || (s.charCodeAt(left) >= 97 && s.charCodeAt(left) < 123))) {
                left++;
                found = true;
            }
            if (!((s.charCodeAt(right) >= 65 && s.charCodeAt(right) < 91) || (s.charCodeAt(right) >= 97 && s.charCodeAt(right) < 123))) {
                found = true;
                right--;
            }
            if(found){
                continue;
            }
            
            if(s[left].toLowerCase()!==s[right].toLowerCase()){
                return false;
            }
            console.log("left", left, "right", right, "oooo")
            left++;
            right--;
        }

        return true;
    }
}
