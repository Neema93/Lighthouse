const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  const chooseStations = function (stations) {
    // Your code in here ...
    const goodstation = [];
    for(const station of stations){
        const capasity = station[1];
        if(capasity >= 20 ){
            const type = station[2];
            if(type === "school" || type === "community centre"){
                goodstation.push(station[0]);
            }

        }
    }
    return goodstation;
  }
  console.log(chooseStations(stations));
  