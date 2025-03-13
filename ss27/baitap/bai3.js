let a;
let b;
let r;
function main() {
    let choice;
    do {
        choice = +prompt(`
        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát`);        
        switch (choice) {
            case 1:
                inputRadius();
                circularArea (r);                
                break;
            case 2:
                inputRadius();
                circularCircumference(r)                
                break;
            case 3:
                inputRectangle();
                areaofRectangle(a,b);                
                break;
            case 4:
                inputRectangle();
                perimeterofRectangle(a,b);                
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("không có lựa chọn này");                
        }
    } while (choice !== 5);
}
function inputRadius() {
    r = +prompt("Mời bạn nhập bán kính hình tròn");
    return r;    
}
function circularArea (r) {
    console.log((Math.PI *r*r).toFixed(2));
}
function circularCircumference(r) {
    console.log((2*Math.PI*r).toFixed(2));    
}
function inputRectangle() {
    a = +prompt("Mời bạn nhập số thứ nhất");
    b = +prompt("Mời bạn nhập số thứ 2");
    return a,b;    
}
function areaofRectangle(a,b) {
    console.log("Diện tích hình chữ nhật là", a*b);    
}
function perimeterofRectangle(a,b) {
    console.log("Chu vi hình chữ nhật là", (a+b)/2);    
}
main();
