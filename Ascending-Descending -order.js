let arr = [1,2,3,5,8,0,2,5,0,8,0,0,0,0,4,5,8,4];


//Ascending order in array  & zero in left side 

for(let i = 0; i < arr.length; i++){
    for(let j = 0 ; j < arr.length; j++){
        if(arr[i]< arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("Ascending order in array :" ,arr);


//Descending order in array  & zero in left Right 

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i]> arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("Descending order in array :" ,arr);
