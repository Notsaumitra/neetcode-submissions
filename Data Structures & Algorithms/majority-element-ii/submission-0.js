class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let first = null;
        let second = null;
        let firstCount = 0;
        let secondCount = 0;

        for(let i=0; i<nums.length; i++){
            if(nums[i]===first){
                firstCount++;
            }else if(nums[i]===second){
                secondCount++;
            }else if(firstCount===0){
                first = nums[i];
                firstCount = 1;
            }else if(secondCount===0){
                second = nums[i];
                secondCount = 1;
            }else{
                firstCount--;
                secondCount--;
            }

        }

        firstCount = 0;
        secondCount = 0;
        for(let i=0; i<nums.length; i++){
            if(nums[i]===first){
                firstCount++;
            }else if(nums[i]===second){
                secondCount++;
            }
        }

        const limit = Math.floor(nums.length/3);

        let result = [];

        if(firstCount>limit) result.push(first);
        if(secondCount>limit) result.push(second);

        return result;
    }
}
