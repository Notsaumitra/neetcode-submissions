class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {

        function trib(n, memo={}){
            if(memo[n]!==undefined) return memo[n];
            if(n<=1) return n;
            if(n==2) return 1;

            memo[n] = trib(n-1, memo) + trib(n-2, memo) + trib(n-3, memo);

            return memo[n];
        }

        return trib(n);
    }
}
