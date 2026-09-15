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
            // Important: This looks like O(N^2) but it is O(N). We need to avoid repetitive work, [0,3,2,5,4,6,1,1], lets say if we calculated next Consecutive elements for 0, then for 1 also we will check all, but since 0 was checked, we dont need to check for 1 same way for 2,3,4,5,6. To do we check if our set has curr - 1(in that case that value would have been already calculated, even if it is coming after curr element)
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
        // TC => O(N)
        // SC => O(N)
    }
}
