class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        let lowest = Infinity;
        let highest = - Infinity;

        for(let i=0; i<nums.length; i++){
            if(nums[i]>highest){
                highest = nums[i];
            }
            if(nums[i]<lowest){
                lowest = nums[i];
            }
        }

        const bucketSize = highest - lowest + 1;

        let bucketArr = Array(bucketSize).fill(0);

        for(let i=0; i<nums.length; i++){
            bucketArr[nums[i]-lowest] = bucketArr[nums[i]-lowest] + 1;
        }

        console.log(bucketArr);

        let k = 0;
        let pointer = 0;

        while(k<bucketArr.length){
            if(bucketArr[k]>0){
                for(let i=0; i<bucketArr[k]; i++){
                    nums[pointer]=k+lowest;
                    pointer++;
                }
            }
            k++;
        }

        return nums;
    }
}
