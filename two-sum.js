/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numbers = [];
    let numbersLessThanTarget = [];

    for(let i = 0; i < nums.length; i++){
        let repeatNum = false;

        for(let j = 0; j < numbersLessThanTarget.length; j++){
            if(numbersLessThanTarget.lenght > 0){
                if(numbersLessThanTarget[j].value == nums[i]){
                    repeatNum = true;
                    break;
                }
            }
        }

        if(repeatNum == false){
            numbersLessThanTarget.push({
                position: i,
                value: nums[i]
            });
        }
        
    }

    for(let i = 0; i < numbersLessThanTarget.length; i++){
        let numberOne = numbersLessThanTarget[i].value;

        for(let j = 0; j < numbersLessThanTarget.length; j++){
            if(numbersLessThanTarget[j].position != numbersLessThanTarget[i].position){
                let numberTwo = numbersLessThanTarget[j].value;

                let sum = numberOne + numberTwo;

                if(sum == target){

                    numbers.push(numbersLessThanTarget[i].position)
                    numbers.push(numbersLessThanTarget[j].position)

                    return numbers;
                }
            }
        }
    }
};