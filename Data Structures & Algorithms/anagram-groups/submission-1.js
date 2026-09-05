class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    //You should aim for a solution with O(m * n) time and O(m) space, where m is the number of strings and n is the length of the longest string.

    // need to find anagram and deals with order duplicates so we need hashmap also we need order so hashset is out of question

    // use countsort for better time complexity O(m * n) here it is O(m * n log n)
    groupAnagrams(strs) {
        const strGrpMap = new Map();

        for(let i=0; i<strs.length; i++){
            const sortedStr = strs[i].split("").sort().join("");
            if(strGrpMap.has(sortedStr)){
                const currStrArr = strGrpMap.get(sortedStr);
                currStrArr.push(strs[i]);
                strGrpMap.set(sortedStr, currStrArr);
            }else{
                strGrpMap.set(sortedStr, [strs[i]]);
            }
        }

        console.log(strGrpMap);
        let outputArr = [];
        for(const [key, value] of strGrpMap){
            outputArr.push(strGrpMap.get(key));
        }

        return outputArr;
    }
}
