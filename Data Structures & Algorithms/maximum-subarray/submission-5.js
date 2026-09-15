class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length===1) return nums[0];
        let maxSum = -Infinity;
        let currSum = 0;

        for(let i=0; i<nums.length; i++){
            currSum += nums[i];
            maxSum = Math.max(maxSum, currSum);
            currSum = Math.max(currSum, 0);
        }

        return maxSum;
    }
}
