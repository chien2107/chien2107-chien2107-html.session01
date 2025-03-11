let choice = 0;
let array =[];
do{
    choice = +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
        7. Thoát chương trình
        `);
        switch (choice) {
            case 1:
                arrayNumber = [];
                let inputArray = +prompt("Mời bạn nhập số lượng phần tử trong mảng");
                for(let i = 0;i<inputArray;i++ ){
                    arrayNumber[i] = +prompt("Nhập các phần tử " + ( i+1));
                }                
                break;
            case 2:
                console.log(`Phần tử trong mảng là : ${arrayNumber}`);
                break;
            case 3:
                let max = array[0];
                let indexMax = 0;
                for(i = 1;i<array.length;i++){
                    if(max<array[i]){
                        max = array[i];
                        indexMax = i;
                    }
                }
                console.log(max,indexMax);
            case 4:
                let sum = 0;
                let count = 0;
                for(let i = 0;i<array.length;i++){
                    if(array[i]>0){
                        sum+=array[i];
                        count++;
                    }

                }
                if(count > 0){
                    console.log("tổng" + sum);
                    console.log("trung bình cộng" + sum/count);
                }else{
                    console.log("không có số dương");
                }
                break;
            case 5:
                console.log(array.reverse());
                break;
            case 6:
                let flag = 0;
                for(let i = 0;i<array.length;i++){
                    if(array[i]!== array[array.length-1-i]){
                        flag++;
                    }
                }
                if(flag == 0){
                    console.log("Đây là chuỗi đối xứng");                    
                }else{
                    console.log("Đây không phải là chuỗi đối xứng");                    
                }
                break;
        }
}while(choice!=7)