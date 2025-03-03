let a = +prompt("nhập số a");
let b = +prompt("nhập số b");
let c = +prompt("nhập số c");
delta = b*b - 4*a*c;
if(delta < 0){
    document.write("Phương trình vô nghiệm");
}else if(delta == 0){
    let x3 = -b/2*a
    document.write("phương trình có nghiệm kép " + x3);
}else{
    let x1 = (-b + delta**(1/2))/2*a;
    let x2 = (-b - delta**(1/2))/2*a;
    document.write("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ";  x2 = " + x2  );
}