//----------------- A function that returns sum of elements whose value is > 20 using function declaration---------------------//
const arr = [45, 21, 10, 3,-7, 78, 65, 14, 19, 7]
console.log('The sum of the elements of the array [' + arr + '] whose values are greater than 20, is ' + sum(arr));

function sum(array){
    let sumOfElements=0;
    array.forEach(element => {
        if(element>20){
            sumOfElements += element;
        }
    });
    return sumOfElements;
}


//--------------- A function that returns an array of strings with array length >=5 and conatining 'a', from another given array-----------------------------// 
const strArray = ['sarah', 'james', 'john', 'kara', 'betty', 'danny'];

const getNewArray = strArray.filter(function(strArray){
    if(strArray.length >= 5 && (strArray.includes('a') || strArray.includes('A'))){
        return true;
    }
});

console.log(getNewArray);
