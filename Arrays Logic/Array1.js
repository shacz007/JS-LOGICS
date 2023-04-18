// Find a peak element which is not smaller than its neighbours

let arr = [2,5,6,5,8,5,9,4,8,7,5,1];

let b = Math.max(...arr);
console.log(b);

// without using math.max

function BigNum(arr){
    let max = arr[0];
    for(let i = 0; i < Array.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i]
        }
    }
    return max;
}
// recheck
let test1 = BigNum(arr);
console.log(test1);
