class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length -1;

        // [3,4,5,6,1,2]. // min element = 1 (o/p)

        // [6,1,2,3,4,5]

        // [5,6,7,8,9,10,1,2,3,4,5]
        // [8,9,10,1,2,3,4,5,6,7]

        while(low<high){
            const mid = low + Math.floor((high - low)/2);

            if(nums[mid]>nums[high]){
                low = mid+1;
            }else if(nums[mid]<nums[high]){
                high = mid;
            }

            console.log(low, "low", mid, "mid", high, "high")
        }


        return nums[low];
    }
}
