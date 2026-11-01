class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = Array(nums.length).fill(undefined);

        memo[0] = nums[0];
        memo[1] = Math.max(nums[1], nums[0]);

        function getMaxMoney(i){
            if(memo[i]!==undefined){
                return memo[i];
            }
            memo[i] = Math.max(getMaxMoney(i-1), nums[i] + getMaxMoney(i-2));
            return memo[i];
        }

        return getMaxMoney(nums.length-1);
    }
}
