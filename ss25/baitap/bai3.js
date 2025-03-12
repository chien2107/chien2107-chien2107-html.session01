function evenNumber(arr){
    if(!Array.isArray(arr)){
        console.log("Dữ liệu không hợp lệ");
        return;        
    }
    let newArray = [];
        for(let i = 0;i<arr.length;i++){
             (arr[i+1]%2==0)?newArray.push(arr[i+1]):newArray;
        }
    if(newArray.length == 0){
        console.log("Mảng không có số chẵn");
    }else{
        console.log(newArray);        
    }
}
evenNumber([1,2,5,7,4]);