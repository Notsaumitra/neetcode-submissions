class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let output = Array(temperatures.length).fill(0);
        let stack = [];

        for(let i=temperatures.length-1; i>=0; i--){
            while(stack.length && (temperatures[i]>=temperatures[stack[stack.length-1]])){
                stack.pop();
            }
            if(stack.length){
                output[i] = stack[stack.length-1]-i;
            }else{
                output[i] = 0;
            }
            stack.push(i);
        }

        return output;
    }
}
