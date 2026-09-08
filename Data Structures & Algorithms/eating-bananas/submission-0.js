class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let ans = 0;


        let low = 1;
        let high = piles[0];
        
        // to get the max banana eat rate
        for(let i=1; i<piles.length; i++){
            if(piles[i]>high){
                high = piles[i];
            }
        }

        console.log("low", low, "high", high)


        while(low<=high){
            const mid = low + Math.floor((high-low)/2);

            let res = 0;

            for(let i=0; i<piles.length; i++){
                let bananaEaten = Math.floor(piles[i]/mid);
                const remBanana = piles[i]%mid;
                if(remBanana){
                    bananaEaten++;
                }
                res += bananaEaten;
            }

            if(res>h){
                low = mid+1;
            }else{
                ans=mid;
                high=mid-1;
            }
        }


        return ans;
    }
}
