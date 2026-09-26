class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let low = 0;
        let high = nums.length - 1;

        let mid = -1;

        while(low <= high){
            mid = low + Math.floor((high-low)/2);

            if(nums[mid]===target){
                return mid;
            }

            if(nums[mid]>target){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }

        return low;
    }
}
