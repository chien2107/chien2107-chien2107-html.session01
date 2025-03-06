let number = Number(prompt("mời bạn nhập số nguyên :"));
let result="";
if(Number.isInteger(number) && number > 0){
    document.write("ước số của " , number , " là : " );
    for(let i = 1 ; i <= number ; i++){
        if(number%i==0){
           result+=i+"; " + " -" + i + "; ";
        }
    }
}else{
    document.write("bạn nhập không đúng định dạng");
}
document.write(result.slice(0,result.length-1));