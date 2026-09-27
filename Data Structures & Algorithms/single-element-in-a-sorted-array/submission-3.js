class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        if(nums.length===1) return nums[0];
        let low = 0;
        let high = nums.length - 1;

        while(low<high){
            const mid = low + Math.floor((high-low)/2);

        if((mid-1>=0 && nums[mid]!==nums[mid-1]) && (mid+1<nums.length && nums[mid]!==nums[mid+1])){
            return nums[mid];
        }

            if(mid%2===0){
                if(nums[mid]!=nums[mid+1]){
                    high = mid;
                }else{
                    low = mid + 2;
                }
            }else{
                 if(nums[mid]!=nums[mid-1]){
                    high = mid;
                }else{
                    low = mid + 1;
                }
            }
        }

        return nums[low];
    }
}
