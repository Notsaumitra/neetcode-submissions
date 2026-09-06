class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let tripletsArr = [];

        let calSet = new Set();

        for(let i=0; i<nums.length; i++){
            if(!calSet.has(nums[i]) && nums[i]<=0){
            const twoSumTripletsArr = this.twoSum(nums, i+1, -nums[i]);
            console.log(twoSumTripletsArr);
                if(twoSumTripletsArr.length){
                    for(let j=0; j<twoSumTripletsArr.length; j++){
                        twoSumTripletsArr[j].push(nums[i]);
                        tripletsArr.push(twoSumTripletsArr[j]);
                    }
                }
            }
            calSet.add(nums[i]);
        }

        console.log(nums);
        return tripletsArr;
    }

    twoSum(nums, i, target){
        let ans = [];
        const numSet = new Set();
        const processedSet = new Set();
        for(let x=i; x<nums.length; x++){
            if(!processedSet.has(nums[x])){
                const reqNum = target - nums[x];
                if(numSet.has(reqNum)){
                    ans.push([reqNum, nums[x]]);
                    processedSet.add(nums[x]);
                }else{
                    numSet.add(nums[x]);
                }
            }
        }

        console.log(ans, "ans")

        return ans;
    }
}
