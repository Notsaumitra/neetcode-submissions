class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let outputArr = Array(nums.length).fill(0);

        for(let i=0; i<nums.length; i++){
            if(i==0){
                outputArr[i] = nums[i];
            }else{
                outputArr[i] = outputArr[i-1]*nums[i];
            }
        }

        console.log("outputArr", outputArr)

        let rightProduct = 0;

        for(let i=nums.length-1; i>=0; i--){
            if(i==0){
                outputArr[i]=rightProduct;
            }else if(i==nums.length-1){
                rightProduct = nums[nums.length-1];
                outputArr[i]=outputArr[i-1];
            }else{
                outputArr[i]=outputArr[i-1] * rightProduct;
                rightProduct = rightProduct * nums[i];
            }
        }

        console.log("outputArr", outputArr)

        return outputArr;
        // TC: O(N)
        // SC: O(N)+O(N)+O(N)=O(3N)=O(N)
    }
}
