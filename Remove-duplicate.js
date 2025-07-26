
// --> Not Duplicate Value in Array Store this array;

let arr = [1,2,3,5,8,0,2,5,0,8,0,0,0,0,4,5,8,4];

let unique = []; 
for(let i = 0; i < arr.length; i++){
    let found = false;
    for(let j = 0; j < unique.length; j++){
        if(arr[i] === unique[j]){
            found = true;
            break;
        }
    }if(!found){
        unique.push(arr[i]);
    }
}
console.log("Not Duplicate Value in Array:", unique);
