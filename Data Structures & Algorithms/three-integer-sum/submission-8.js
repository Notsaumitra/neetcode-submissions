class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let tripletsArr = [];
        let left = -1;

        for(let i=0; i<nums.length; i++){
            if(nums[i]<=0 && (left>-1 ? nums[left]!=nums[i] : true)){
            const twoSumTripletsArr = this.twoSum(nums, i+1, -nums[i]);
                if(twoSumTripletsArr.length){
                    for(let j=0; j<twoSumTripletsArr.length; j++){
                        twoSumTripletsArr[j].push(nums[i]);
                        tripletsArr.push(twoSumTripletsArr[j]);
                    }
                }
            left=i;
            console.log("left", left)
            }
        }
        return tripletsArr;
    }

    twoSum(nums, i, target){
        let ans = [];
        let left = i;
        let right = nums.length - 1;
        for(let x=i; x<nums.length; x++){
            if(left<right){
                const sum = nums[left] + nums[right];
                if(sum>target){
                    right--;
                }else if(sum<target){
                    left++;
                }else{
                    ans.push([nums[left], nums[right]]);
                    right--;
                    left++;
                    while(left<right && nums[right+1]==nums[right]){
                        right--;
                    }
                    while(left<right &&  nums[left]==nums[left-1]){
                        left++;
                    }
                }
            }
        }

        return ans;
    }
}
