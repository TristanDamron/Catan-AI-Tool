/*
    name: Tristan Damron (github.com/TristanDamron || tdamron14@mail.wou.edu)
    license: GNU GPL
    version: 1.0.0
*/

/*
 checkCards() -> checks the cards in your hand and determines whether or not a resource card could be made
 checkMoves() -> checks to see what moves can be made from all characters
*/


//TODO: implement logic
function checkCard(resources) {
    //accepts the resources in your hand (an array)
    //if you have wood and brick then you can build a road
    //if you have wood, brick, wheat, and sheep then you can build a settlement
    //if you have 2 wheat and 3 rocks then you can build a city
    //if you have a wheat, sheep, and a rock then you can build a development card
}

//TODO: implement logic
function checkMoves(map) {
    //accepts the map object
    //if you have a settlement on the map AND you have the resources to make city then mark the settlement for an upgrade
    //if you have a settlement with no roads around it AND there is no other settlement within 2 spaces of the other then mark the roads around the settlement for road building
}
