function loopyLighthouse(range, multiples, words){
    const start = range[0];
    const end = range[1];
    const num1 = multiples[0];
    const num2 = multiples[1];
    const str1 = words[0];
    const str2 = words[1];
    const ans = [];
    for(let i = start ; i <= end ; i++){
      if( i % num1 === 0 && i % num2 === 0){
        ans.push(str1 + str2);
      }else if( i % num1 === 0){
        ans.push(str1);
      }else if( i % num2 === 0){
        ans.push(str2); 
      }else{
        ans.push(i);
      }
    }
    console.log(ans);
  }
  loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);