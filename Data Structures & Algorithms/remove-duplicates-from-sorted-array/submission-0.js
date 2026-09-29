class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let sorted = 0;


        for(let i=1; i<nums.length; i++){
            if(nums[i]!==nums[sorted]){
                sorted++;
                let temp = nums[sorted];
                nums[sorted] = nums[i];
                nums[i] = temp;
            }
        }


        return sorted+1;

    }
}
