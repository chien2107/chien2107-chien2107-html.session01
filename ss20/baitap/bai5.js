let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let result = 1;
if(Number.isNaN(a) || Number.isNaN(b)){
    document.write("Không hợp lệ")
} else{
    for(i=0; i<b; i++){
        result = result*a;
    }
    document.write(result);
}