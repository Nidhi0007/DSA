// John has to go to his friend claire house.r. Then find minimum hour required to go to his friend house.
// he can travel 1, 2 3 , 4 ,5 km in 1 hour

function findMinimumHour(totalDistance){
    let remainingDistance=totalDistance
    let hours=0

    while(remainingDistance>0){
        if(remainingDistance>=5){
            hours+=Math.floor(remainingDistance/5)
            remainingDistance%=5;
            // console.log("if5",remainingDistance,hours)
        }else if(remainingDistance>=4){
            hours+=Math.floor(remainingDistance/4)
            remainingDistance%=4;
            // console.log("if4",remainingDistance,hours)
        }
        else if(remainingDistance>=3){
            hours+=Math.floor(remainingDistance/3)
            remainingDistance%=3;
            // console.log("if3",remainingDistance,hours)
        }else if(remainingDistance>=2){
            hours+=Math.floor(remainingDistance/2)
            remainingDistance%=2;
            // console.log("if2",remainingDistance,hours)
        }else{
            hours+=remainingDistance;
            remainingDistance=0
        }
    }
    return hours
}
console.log(findMinimumHour(24))