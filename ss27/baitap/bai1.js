let a;
let b;
let choice;
let res;
function main() {
  do {
    choice = +prompt(`
            1.Cộng hai số.
            2.Trừ hai số.
            3.Nhân hai số.
            4.Chia hai số.
            5.Thoát.
            Lựa chọn của bạn : `);
    switch (choice) {
      case 1:
        input();
        res = tong(a, b);
        console.log(res);
        break;
      case 2:
        input();
        res = hieu(a, b);
        console.log(res);
        break;
      case 3:
        input();
        res = tich(a, b);
        console.log(res);
        break;
      case 4:
        input();
        res = thuong(a, b);
        console.log(res);
        break;
      case 5:
        console.log("thoát");
        break;
      default:
        console.log("không có lựa chọn này");
        break;
    }
  } while (choice != 5);
}
function input() {
  a = +prompt("mời bạn nhập số thứ nhất : ");
  b = +prompt("mời bạn nhập số thứ hai : ");
  return a, b;
}
function tong(a, b) {
  return a + b;
}
function hieu(a, b) {
  return a - b;
}
function tich(a, b) {
  return a * b;
}
function thuong(a, b) {
  return a / b;
}
main();