let array=[2, 4, 6, 8];
consecutive(array);
function consecutive(array){
    let check=0;
    let gap=array[1]-array[0];
    if(Array.isArray(array)){
        for(i=0; i<array.length-1; i++){
            if(array[i]+gap!=array[i+1]){
                check++;
                break;
            }
        }
        if(check==0){
            console.log("True");
        } else{
            console.log("False");
        }
    } else{
        console.log("Dữ liệu không hợp lệ");
    }
}