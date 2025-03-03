let number = +prompt("Mời bạn nhập số");
if(Number.isInteger(number)){
    if(number % 3 == 0 && number % 5 == 0){
        document.write("Số chia hết cho cả 3 và 5");
    }else{
        document.write("Số không chia hết cho cả 3 và 5");
    }
}else{
    document.write("Không phải là số");
}