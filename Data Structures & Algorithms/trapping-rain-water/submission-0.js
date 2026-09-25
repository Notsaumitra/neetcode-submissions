class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let stack = [];
        let ngr = Array(height.length).fill(0);
        let ngl = Array(height.length).fill(0);
        
        for(let i=0; i<height.length; i++){
            if(stack.length && height[i]<stack[stack.length-1]){
                ngl[i] = stack[stack.length-1];
            }else{
                stack.push(height[i]);
            }
            // while(stack.length && height[i]>stack[stack.length-1]){
            //     stack.pop();
            // }
            // if(stack.length){
            //     ngl[i] = stack[stack.length-1]
            // }

            // stack.push(height[i]);
        }

        stack = [];

        for(let i=height.length-1; i>=0; i--){
            if(stack.length && height[i]<stack[stack.length-1]){
                ngr[i] = stack[stack.length-1]
            }else{
                stack.push(height[i]);
            }
        }

        let total = 0;

        for(let i=0; i<height.length; i++){
            if(ngl[i]>0 && ngr[i]>0){
                let minHeight = Math.min(ngl[i], ngr[i]);
                total+=(minHeight - height[i]);
            }
        }

        return total;
    }
}
