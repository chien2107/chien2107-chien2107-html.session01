let a = +prompt("Mời bạn nhập số a");
let b = +prompt("Mời bạn nhập số b");
let c = +prompt("Mời bạn nhập số c");
if(a > 0 && b > 0 && c > 0){
    let e = a*((1 + b/100)**c);
    let d = e - a;
    document.write(e , "<br>");
    document.write(d);
}else{
    document.write("Không hợp lệ");
}