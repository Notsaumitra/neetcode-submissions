class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numMap = new Map();

        for(let i=0;i<nums.length;i++){
            if(numMap[nums[i]]){
                return true;
            }else{
                numMap[nums[i]] = 1;
            }
        }

        return false;
    }
}
