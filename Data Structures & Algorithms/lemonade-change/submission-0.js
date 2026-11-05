class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let countChange = 0;
        let countBigChange = 0;

        for(let i=0; i<bills.length; i++){
            if(bills[i]===5){
                countChange++;
            }else if(bills[i]===10){
                countChange--;
                countBigChange++;
            }else{
                if(countBigChange>0){
                    countBigChange--;
                    if(countChange>0){
                        countChange--;
                    }else{
                        return false;
                    }
                }else{
                    countChange = countChange - 3;
                }
            }
            if(countChange<0) return false;
        }

        return true;
    }
}
