class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];

        function getCombinations(idx, target, currComb){

            if(target===0){
                result.push([...currComb]);
                return;
            }

            if(target<0 || idx===nums.length) return;

            currComb.push(nums[idx]);
            getCombinations(idx, target - nums[idx], currComb);
            currComb.pop();
            getCombinations(idx+1, target, currComb);
        }

        getCombinations(0, target, []);


        return result;
    }
}
