class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let low = 0;
        let high = nums.length - 1;


        while(low<=high){
            const mid = low + Math.floor((high-low)/2);

            if(nums[mid]==target){
                return mid;
            }
            // [10, 1, 2, 3, 4, 5, 6, 7, 8, 9].   2

            // [6, 7, 8, 9, 10, 1, 2, 3, 4, 5].  8
            // [2, 3, 4, 5, 6, 7, 8, 9, 10, 1].  8


            // [3,4,5,6,1,2], target = 1
// l=0, h=5, m=2.  right half l=m+1, l=3, h=5
// l=3, h=5, m=4.

// [3,5,6,0,1,2], target = 4
// l=0, h=5, m=2.  // left half h=m-1=1, l=0, h=1
// l=0, h=1, m=0.  // left half h=m-1=-1, invalid

            if(nums[mid]<nums[high]){

                // right is sorted
                if(target>nums[mid] && target<=nums[high]){
                    low = mid+1;
                }else{
                    high = mid-1;
                }
            }else{

                // left is sorted
                if(target>=nums[low] && target<nums[mid]){
                    high = mid -1;
                }else{
                    low = mid+1;
                }
            }

            console.log("low", low, "mid", mid, "high", high)
        }

        return -1;
    }
}
