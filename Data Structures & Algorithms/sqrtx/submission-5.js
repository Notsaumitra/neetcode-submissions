class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x==0 || x==1) return x;
        let low = 0;
        let high = x;

        let ans = 0;

        while(low<=high){
            const mid = low + Math.floor((high-low)/2);

            let sq = mid * mid;

            if(sq===x){
                return mid;
            }else if(sq<x){
                ans = mid;
                low=mid+1;
            }else{
                high=mid-1;
            }
        }

        return ans;
    }
}
