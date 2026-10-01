class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set();

        for(let i=0; i<nums.length; i++){
            numSet.add(nums[i]);
        }

        let ans = 0;

        for(const val of numSet){

            if(!numSet.has(val+1)){

            let tempAns = 1;
            let value = val;
            while(numSet.has(value-1)){
                tempAns++;
                value--;
            }
            ans = Math.max(ans, tempAns);
            }
        }

        return ans;
    }
}
