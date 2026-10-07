class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        function getAllSubsets(arr){
            let result = [];

            function getSubset(idx, currSubSet){
                if(idx === arr.length){
                    result.push([...currSubSet]);
                    return;
                }
                currSubSet.push(arr[idx]);
                getSubset(idx+1, currSubSet);
                currSubSet.pop();
                getSubset(idx+1, currSubSet);
            }

            getSubset(0, []);

            return result;
        }

        return getAllSubsets(nums);
    }
}
