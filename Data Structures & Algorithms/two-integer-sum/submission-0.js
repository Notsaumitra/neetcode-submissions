class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.

    twoSum(nums, target) {
        const numMap = new Map();
        for(let i=0 ; i<nums.length; i++){
            let diffNum = target - nums[i];
            if(numMap.has(diffNum)){
                return [numMap.get(diffNum), i];
            }
            numMap.set(nums[i], i);
        }

        return [-1,-1];
    }
}
