let array=[6, 8, 3, 1, 0, 4, 5];
sortEven(array);
function sortEven(array){
    let even=[];
    let count=0;
    let newArr=[];
    if(Array.isArray(array)){
        for(i=0; i<array.length; i++){
            if(array[i]%2==0){
                even.push(array[i]);
            }
        }
        even.sort();
        for(i=0; i<array.length; i++){
            if(array[i]%2==0){
                newArr.push(even[count])
                count++;
            } else{
                newArr[i]=array[i];
            }
        }
        console.log(newArr);
    } else{
        console.log("Dữ liệu không hợp lệ");
    }
}