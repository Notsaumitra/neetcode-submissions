class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length -1 ;

        let waterLevel = 0;

        while(l<r){
            let minHeight = Math.min(heights[l], heights[r]);
            let distance = r - l;

            let currLevel = minHeight * distance;

            waterLevel = Math.max(waterLevel, currLevel);

            if(heights[l]<heights[r]){
                l++;
            }else if(heights[l]>heights[r]){
                r--;
            }else{
                l++;
                r--;
            }
        }


        return waterLevel;
    }
}
