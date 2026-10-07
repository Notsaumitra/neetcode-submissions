class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        function climbStrs(n, memo={}){
            if(memo[n]!==undefined) return memo[n];
            if(n<=2) return n;

            memo[n] = climbStrs(n-1, memo) + climbStrs(n-2, memo);

            return memo[n];
        }

        return climbStrs(n);
    }
}
