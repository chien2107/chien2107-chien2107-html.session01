function filterNumbers() {
    let array = [];
    for(let i = 0;i<10;i++){
        let number = +prompt("Mời bạn nhập giá trị");
        if(Number.isInteger(number)){
            array.push(number);
        }
    }
    let newArray = array.filter(item => item >= 10);
    (newArray.length == 0) ?  console.log("Mảng không có phần tử nào") :console.log(newArray);   
}
filterNumbers();
