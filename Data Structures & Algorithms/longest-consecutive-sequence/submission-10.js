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

        let maxSeq = 0;

        for(const val of numSet){
            if(numSet.has(val+1)) continue;

            let currAns = 1;
            let seq = val - 1;
            while(numSet.has(seq)){
                currAns++;
                seq--;
            }

            maxSeq = Math.max(maxSeq, currAns);
        }

        return maxSeq;
    }
}
