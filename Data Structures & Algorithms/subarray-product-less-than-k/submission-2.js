class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        if (k <= 1) return 0;
        let ans = 0;

        let left = 0;
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            product *= nums[i];
            while (product >= k && left <= i) {
                product = product / nums[left];
                left++;
            }
            let subLength = i - left + 1;
            ans += subLength;
        }

        return ans;
    }

}