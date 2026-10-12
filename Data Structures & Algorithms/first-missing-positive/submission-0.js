class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // let right = -1;
        // let left = -1;
        // for(let i=0; i<nums.length; i++){
        //     if(nums[i]>0 && nums[right]===-1){
        //         right = nums[i] + 1;
        //         left = nums[i] - 1;
        //     }else if(nums[i]===right){
        //         right++;
        //     }e
        // }

        let numSet = new Set();
        let smallestPositive = 1;

        for(let i=0; i<nums.length; i++){
            if(nums[i]>0){
                numSet.add(nums[i]);

                while(numSet.has(smallestPositive)){
                    smallestPositive++;
                }
            }
        }

        return smallestPositive;
    }
}
