class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefixArr = Array(nums.length).fill(1);
        let suffixArr = Array(nums.length).fill(1);

        let outputArr = Array(nums.length).fill(0);

        for(let i=0; i<nums.length; i++){
            if(i==0){
                prefixArr[i] = nums[i];
            }else{
                prefixArr[i] = prefixArr[i-1]*nums[i];
            }
        }

        for(let i=nums.length-1; i>=0; i--){
            if(i==nums.length-1){
                suffixArr[i] = nums[i];
            }else{
                suffixArr[i] = suffixArr[i+1]*nums[i];
            }
        }

        for(let i=0; i<nums.length; i++){
            if(i==0){
                outputArr[i]=suffixArr[i+1];
            }else if(i==nums.length-1){
                outputArr[i]=prefixArr[i-1];
            }else{
                outputArr[i]=prefixArr[i-1] * suffixArr[i+1];
            }
        }

        console.log("prefixArr", prefixArr)
        console.log("suffixArr", suffixArr)
        console.log("outputArr", outputArr)

        return outputArr;
        // TC: O(N)
        // SC: O(N)+O(N)+O(N)=O(3N)=O(N)
    }
}
