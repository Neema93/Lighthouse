const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ];
  const judgeVegetable = function (vegetables, metric) {
    // Your code in here ...
   const checkVegetable = vegetables[0];
   for(let i=0 ; i < vegetables.length ; i++){
       if(vegetables[i][metric] > checkVegetable[metric]) {
        checkVegetable = [i];
      }
   }
   return checkVegetable.submitter;
  }
  
  const metric = 'redness';
  
  console.log(judgeVegetable(vegetables, metric));