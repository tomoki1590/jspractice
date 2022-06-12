for(let number =1; number <100; number++){
  if(number %3 === 0){
    console.log("3の倍数です");
  }else if(number %5 === 0){
    console.log("5の倍数です");
  }else{
    console.log(number);
  }
}

let kagura =['潮祓','尊人','四神','天神','八幡','神武','恵比寿','鍾馗','大江山','天蓋','塵輪','安達ヶ原','大蛇']

const test = ()=> {
  if (kagura.length==13){
console.log("大暮神楽団：",kagura);
  }else{
    console.log("芸北分校神楽部");
  }
};
test();