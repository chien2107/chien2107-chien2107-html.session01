let number=+prompt("Mời bạn nhập chuỗi số nguyên");
let check=0;
if(Number.isInteger(number)){
    let numberText=number.toString();
    for(i=0; i<=numberText.length/2; i++){
        if(numberText[i] != numberText[numberText.length-1-i]){
            check++;
        }
    }
    if(check==0){
        document.write("Chuỗi đối xứng");
    } else{
        document.write("Chuỗi không đối xứng");
    }
} else{
    document.write("Chuỗi không hợp lệ");
}