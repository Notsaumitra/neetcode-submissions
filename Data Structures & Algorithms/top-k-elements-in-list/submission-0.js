class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numMap = new Map();

        for(let i=0; i<nums.length; i++){
            if(numMap.has(nums[i])){
                numMap.set(nums[i], numMap.get(nums[i])+1);
            }else{
                numMap.set(nums[i], 1);
            }
        }

        let ans = [];

        let bucketArr = Array(nums.length+1).fill(null).map(i=> []);

        for(const [key,value] of numMap){
            bucketArr[value].push(key);
        }

        for(let i=bucketArr.length-1; i>=0; i--){
            if(bucketArr[i].length){
                for(let j=0; j<bucketArr[i].length; j++){
                    ans.push(bucketArr[i][j]);
                    if(ans.length===k){
                        return ans;
                    }
                }
            }
        }

        console.log(bucketArr, numMap, ans)

        return ans;
    }
}
