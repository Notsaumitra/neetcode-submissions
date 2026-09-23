class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxOnes = 0;

        let currOnes = 0;
        for(let i=0; i<nums.length; i++){
            if(nums[i]>0){
                currOnes++;
                maxOnes = Math.max(maxOnes, currOnes);
            }else{
                currOnes=0;
            }
        }


        return maxOnes;
    }
}
