/*
Write a JavaScript function called findMax that takes an array of numbers as an argument and returns the maximum number in the array.
*/

function findMax(arr) {
    let max = arr[0];
    let i = 0;
    for(i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}

arr=[1,21,3,91,16]
console.log(findMax(arr)) // 91
