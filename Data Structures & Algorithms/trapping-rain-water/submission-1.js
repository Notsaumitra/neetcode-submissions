class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;

        let left = 0;
        let right = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;

        while(left<right){
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if(leftMax>rightMax){
                totalWater += rightMax - height[right];
                right--;
            }else{
                totalWater += leftMax - height[left];
                left++;
            }
        }


        return totalWater;
    }
}
