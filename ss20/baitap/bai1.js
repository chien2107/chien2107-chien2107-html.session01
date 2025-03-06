let number = +prompt("mời bạn nhập số:");
let sum = 0;
if(Number.isInteger(number)){
    for( let i = 0 ; i <= number ; i++){
        sum = sum + i;
    }
    document.write(sum);
}else{
    document.write("Dữ liệu nhập vào không hợp lệ");
}