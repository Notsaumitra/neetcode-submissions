class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set();

        for(let i=0; i<nums.length; i++){
            numSet.add(nums[i]);
        }

        let ans = 0;

        for(const value of numSet){
            if(numSet.has(value-1)) continue;

            let tempAns = 1;
            let tempvalue = value+1;
            while(numSet.has(tempvalue)){
                tempAns++;
                tempvalue++;
            }
            ans = Math.max(ans, tempAns);
        }

        return ans;
    }
}
