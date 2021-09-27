function smartGarbage(trash, bins){
    if(trash === "waste"){
        bins.waste = bins.waste + 1;
    }else if(trash === "recycling"){
        bins.recycling = bins.recycling + 1;
    }else if(trash === "compost"){
        bins.compost = bins.compost + 1;
    }else {
        return bins;
    }
      return bins;
    
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));