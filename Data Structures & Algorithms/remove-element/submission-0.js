class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let left = -1;
        for(let i=0; i<nums.length; i++){
            if(nums[i]===val){

            }else{
                if(left<i){
                    let temp = nums[left+1];
                    nums[left+1] = nums[i];
                    nums[i] = temp;
                }
                left++;
            }
        }

        return left+1;
    }
}
