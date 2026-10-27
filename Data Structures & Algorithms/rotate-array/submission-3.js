class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;
        // [1,2,3,4,5,6,7,8]
        // rotate 2 steps to the right: [7,8,1,2,3,4,5,6]
        for(let i=0; i<nums.length/2; i++){
            const j = nums.length - 1 - i;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        for(let i=0; i<k/2; i++){
            const j = k - 1 - i;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        for(let i=k; i<(k + (nums.length-k)/2); i++){
            const j = nums.length - 1 - i + k;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        return nums;
    }
}
