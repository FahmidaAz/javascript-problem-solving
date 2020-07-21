//wood need for each furniture
var chair = 1; 
var table = 3;
var bed = 5;

function furniture(Chairs,Tables,Beds){
    var totalWoodForChair = chair *Chairs;
    var totalWoodForTable = table* Tables;
    var totalWoodForBed = bed * Beds;

    var  TotalQubicWood = totalWoodForChair + totalWoodForTable +totalWoodForBed;

    return TotalQubicWood;
    
}

var totalWood = furniture(2,4,5); // this parameter showing how many chairs tables and beds we have.
console.log("You will nedd total:",totalWood, "qubic wood.");

totalWood = furniture(10,12,13); // this parameter showing how many chairs tables and beds we have.
console.log("You will nedd total:",totalWood, "qubic wood.");
