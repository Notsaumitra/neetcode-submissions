class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // 6,1,2,3,4,5
        // 5,6,1,2,3,4
        // 4,5,6,1,2,3
        // 3,4,5,6,1,2 // l=0, h=5, m=2 => l=3, h=5, m=4 => l=3, h=4, m=3 => l=3, h=3, mid=3
        // 2,3,4,5,6,1
        // 1,2,3,4,5,6

        let low = 0;
        let high = nums.length - 1;
        
        while(low<high){
            let mid = low + Math.floor((high - low)/2);
            if(nums[mid]>nums[high]){
                low = mid+1;
            }else if(nums[mid]<nums[high]){
                high = mid;
            }
        }


        return nums[low];
    }
}
