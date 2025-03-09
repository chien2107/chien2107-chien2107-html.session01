let array=[];
let count=0;
for(let i=0; i<10; i++){
    count=0;
    array[i]=prompt("Mời bạn nhập số ");
    if(array[i]>=10){
        count++;
    }
    if(count>0){
        document.writeln(array[i]);
    }
}
if(count==0){
    document.writeln("Không có phần tử nào lớn hơn 10");
}