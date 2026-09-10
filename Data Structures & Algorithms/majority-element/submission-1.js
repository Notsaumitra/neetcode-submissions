class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majorityElement = nums[0];
        let count = 1;

        // majority element, works only when majority element frequency > n/2
        for(let i=1; i<nums.length;i++){
            if(nums[i]==majorityElement){
                count++;
            }else if(count>0){
                count--;
            }
            if(count==0){
                majorityElement=nums[i];
            }
        }

        // TC = O(n)
        // SC = O(1)

        return majorityElement;
    }
}
