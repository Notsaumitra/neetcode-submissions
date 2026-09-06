class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // Assuming this as a 1D array and since it is sorted we can apply binary search, catch is to convert mid in rows and columns, ideally we can represent as we loop from 0 to n in first row, basically all the elements in first n columns, to get correct row we divide mid by columns and to get col we take remainder from mid
    searchMatrix(matrix, target) {
        let low = 0;
        let high = (matrix.length * matrix[0].length) - 1;
        let colLength = matrix[0].length;


        while(low<=high){
            const mid = low + Math.floor((high-low)/2);
        console.log("low", low, "high", high, "mid", mid)
            const row = Math.floor(mid/colLength);
            const col = mid%colLength;
            if(matrix[row][col]>target){
                high = mid - 1;
            }else if(matrix[row][col]<target){
                low = mid + 1;
            }else{
                return true;
            }
        }

        return false;
    }
}


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     let rowLow = 0;
//     let rowHigh = matrix.length -1;
//     let numCol = matrix[0].length - 1;

//     let predictableRow = -1;

//     while(rowLow<=rowHigh){
//         let rowMid = rowLow + Math.floor((rowHigh-rowLow)/2);
//         if(matrix[rowMid][0]<=target && matrix[rowMid][numCol]>=target){
//             predictableRow = rowMid;
//             break;
//         }else if(matrix[rowMid][0]<target){
//             rowLow = rowMid + 1;
//         }else if(matrix[rowMid][numCol]>target){
//             rowHigh = rowMid - 1;
//         }
//     }

//     let colLow=0
//     let colHigh = numCol;

//     while(colLow<=colHigh && predictableRow>-1){
//         let colMid = colLow + Math.floor((colHigh-colLow)/2);
        
//         if(matrix[predictableRow][colMid]<target){
//             colLow = colMid + 1;
//         }else if(matrix[predictableRow][colMid]>target){
//             colHigh = colMid -1;
//         }else{
//             return true;
//         }
//     }


//     return false;
// };
