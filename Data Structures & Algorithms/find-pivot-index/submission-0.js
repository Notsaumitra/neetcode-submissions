class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let totalSum = 0;
        for(let i=0; i<nums.length; i++){
            totalSum += nums[i];
        }

        let leftSum = 0;

        for(let i=0; i<nums.length; i++){
            leftSum += nums[i];
            const rightSum = totalSum - leftSum + nums[i];

            if(leftSum === rightSum) return i;
        }

        return -1;
    }
}
