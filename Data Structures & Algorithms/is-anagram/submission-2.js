class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // logically use involves duplicates, frequency to use HashMap
    // since this requires O(1) space, didnt use hashMap, also since using frequecy array for characters we use charCodeAt, also for lowercase ASCII values start at 97 and for uppercase 65, so to get 0 to 25 we deduct 'a''s charCode value, 'a'.charCodeAt(0) requires index so we use 0 here 
    isAnagram(s, t) {
        let strFreq = Array(26).fill(0);

        for (let i=0; i<s.length; i++){
            const index= s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            strFreq[index] = strFreq[index] + 1;
        }

        console.log(strFreq);

        for (let i=0; i<t.length; i++){
            const index = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(!strFreq[index]) return false;
            strFreq[index] = strFreq[index] - 1;
        }

        console.log(strFreq);

        for (let i=0; i<strFreq.length; i++){
            if(strFreq[i]!==0) return false;
        }

        return true;
    }
}
