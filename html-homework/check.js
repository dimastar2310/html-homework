function sumItUp(numbers){
  // var sum = 0;
  // for(var num of numbers){
  //   sum+=num;
  // }

  function reducer(total,item){
    return total + item;
  }
  var output = number.reduce(reducer,0);

  return output;
}
  
  console.log(sumItUp([1,2,3,4,5]));