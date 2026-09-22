class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let doubleNums = [];

        for(let i=0; i<nums.length; i++){
            doubleNums[i] = nums[i];
            doubleNums[i+nums.length] = nums[i];
        }

        return doubleNums;
    }
}
