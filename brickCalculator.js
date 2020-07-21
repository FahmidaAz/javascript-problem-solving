var brickPerFeet = 1000;

function building(storeys){
     var firstTenStoreys = 0;
     var restStoreys = storeys - 10;
     var totalFeet;
     var totalBrick;

    if(storeys >10){
       firstTenStoreys = 10*15; // per storeys are 15 feet
       restStoreys = restStoreys * 12; // per storeys are 12 feet
        totalFeet = firstTenStoreys + restStoreys;
       totalBrick = totalFeet * 1000;    
    }else if (storeys <= 10){
        firstTenStoreys = storeys * 15;
        totalBrick = firstTenStoreys * 1000;
          
    }

    return totalBrick;
}

var result = building(30);

console.log(result);

var result2 = building(50);

console.log(result2);

var result3 = building(5);

console.log(result3);