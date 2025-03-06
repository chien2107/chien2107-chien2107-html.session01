let answer = Number(prompt("mời bạn nhập tháng : "));
switch (answer) {
    case 1 , 2 , 3 :
        document.write("mùa xuân");
        break;
    case 4 , 5 , 6 :
        document.write("mùa hạ");
        break;
    case 7 , 8 , 9 :
        document.write("mùa thu");
        break;
    case 10 , 11 , 12 : 
        document.write("mùa đông");
        break;
    default:
        document.write("không có thang này trong năm");
        break;
}