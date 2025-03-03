let number = +prompt("Mời bạn nhập vào số tháng");
switch (number) {
    case 1 , 3 , 5 , 7 , 8 , 10 , 12 :
        document.write("31 ngày");
        break;
    case 2:
        document.write("28 ngày hoặc 29 ngày");
        break;    
    case 4 , 6 , 9 , 11 :
        document.write("30 ngày");
        break;    
    default:
        document.write("Tháng ko hợp lệ");
        break;
}