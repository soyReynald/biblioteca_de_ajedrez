/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    var resultInTarget = false;
    var accumulator = [];
    var sortedArray = nums.sort();
    var targetResulting = [];

    
    sortedArray.forEach((num, idx) => {
        if (sortedArray[target] == target && resultInTarget != true && accumulator.length < 1) {
            if (sortedArray[idx] == target) {
                targetResulting.push(sortedArray[target]);
                resultInTarget = true;
            }
        }

        if (num <= target && resultInTarget != true  && sortedArray[idx] <= target) {
            accumulator.push(num);
            resultInTarget = false;
        }         
    });

    if(resultInTarget == false && targetResulting.length) {
        accumulator.pop();
        return accumulator;
    } else {
        return targetResulting.push(accumulator[accumulator.length-1]);
    } 
};

//! A solution a got momentary:
// var targetIndices = function(nums, target) {
//     const result = [];
//     let start = count = 0;

//     for (const num of nums) {
//         if (num > target) continue;
//         num === target ? count += 1 : start += 1;
//     }
//     for (let index = start; index < start + count; index++) {
//         result.push(index);
//     }
//     return result;
// };