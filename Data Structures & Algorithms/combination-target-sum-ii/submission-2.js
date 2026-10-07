class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let candMap = new Map();
        candidates.sort((a,b)=>a-b);
        for(let i=0; i<candidates.length; i++){
            candMap.set(candidates[i], (candMap.get(candidates[i]) || 0) + 1);
        }

        let result = [];

        function getCombinations(idx, currIdxCount, target, currComb){
            if(target===0){
                result.push([...currComb]);
                return;
            }
            if(target<0 || idx===candidates.length){
                return;
            }

            currComb.push(candidates[idx]);
            if(currIdxCount>0){
                getCombinations(idx, currIdxCount-1, target-candidates[idx], currComb);
            }
            currComb.pop();
            let next = idx+1;
            while(idx<candidates.length - 1 && candidates[idx]===candidates[next]){
                next++;
            }

                getCombinations(next, candMap.get(candidates[next]), target, currComb);
        }

        getCombinations(0, candMap.get(candidates[0]), target, []);

        return result;
    }
}
