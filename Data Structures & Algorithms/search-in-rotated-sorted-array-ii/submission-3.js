class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;

        while(low <= high){
            const mid = low + Math.floor((high - low) / 2);

            if(nums[mid] === target){
                return true;
            }

            // Handle duplicates where we cannot determine which half is sorted
            if(nums[low] === nums[mid] && nums[mid] === nums[high]){
                low++;
                high--;
                continue;
            }

            // right array is sorted
            if(nums[mid] <= nums[high]){
                if(target > nums[mid] && target <= nums[high]){
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            } else {
                // left array is sorted
                if(target >= nums[low] && target < nums[mid]){
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }


        return false;
    }
}
