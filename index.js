//objective 1 distance from Hq in blocks 
function distanceFromHqInBlocks(somevalue) {
    return Math.abs((somevalue - 42)); // scubber street

}
// distance from hq on feet 
 // distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location.
 function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet long
 }

//distance travelled on feet
function distanceTravelledInFeet(start,destination){
return Math.abs (destination-start)*264 //Remembering the streets are 264 ft long !!
}

// Calculation of fare prices 
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet (start,destination)
    if (distance <= 400) {
        return 0// gives customers a free sample        
    }
    else if (distance >400 && distance <=2000)
    return (distance -400)*0.02 //2 cents per foot 
    else if (distance >2000 && distance <2500)
    return 25 // 25 dollars for distance over 2000 ft
    else{
       return 'cannot travel that far';   // does not allow rides above 2500feet 

    }   
}