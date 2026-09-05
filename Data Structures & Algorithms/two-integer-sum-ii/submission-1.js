class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let numMap = new Map();
        for(let i=0; i<numbers.length; i++){
            let diff = target - numbers[i];
            if(numMap.has(diff)){
                return [numMap.get(diff)+1, i+1]
            }
            numMap.set(numbers[i], i);
        }

        return [-1,-1];
    }
}
