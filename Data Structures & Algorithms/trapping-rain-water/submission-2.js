class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let totalWater = 0;

        let left = 1;
        let right = height.length - 2;

        let leftMax = height[0];
        let rightMax = height[height.length-1];


        while(left<=right){
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if(leftMax > rightMax){
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
