let vnd;
let usd;
let choice = +prompt(`Mời bạn lựa chọn :
    1.VND --> USD
    2.USD --> VND` );
switch (choice) {
    case 1 :
        vnd = +prompt("Mời bạn nhập số tiền vnd");
        usd = vnd/23000;
        document.write(usd + " usd" );        
        break;
    case 2 :
        usd = +prompt("Mời bạn nhập số tiền usd");
        vnd = usd*23000;
        document.write(vnd + " vnd" );
        break;
    default :
        document.write("Nhập sai . Mời bạn nhập lại");
}