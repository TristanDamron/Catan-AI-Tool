/*
    name: Tristan Damron (github.com/TristanDamron || tdamron14@mail.wou.edu)
    license: GNU GPL
    version: 1.0.0
*/

var exports = module.exports;

//TODO: implement logic
exports.addToPoint = function(obj, x, y) {
    console.log("Added to point");
    //adds obj to point at x, y
}

//TODO: implement logic
exports.getPoint = function(x, y) {
    console.log("Got point");
    //returns the object at point x, y
}

//TODO: implement logic
exports.draw = function(context) {
    for (var x = 0; x < 800; x += 40) {
	context.moveTo(x, 100);
	context.lineTo(x, 500);
    }  

    for (var y = 100; y < 500; y += 40) {
	context.moveTo(0, y);
	context.lineTo(800, y);
    }

    //adds points on grid -> hex algorithm

    context.strokeStyle = "#ccc";
    context.stroke();

}

exports.renderPoints =  function(context, img, x, y) {
    /*
      start at x, y
      *       
       **
	 **
           *
	print
	down one
	over one 
     */
    
    // context.drawImage(img, x, y);

    // for (var i = 1; i < 3; i++) {
    // 	context.drawImage(img, x + (40 * i), y + (40 * i));
    // 	context.drawImage(img, x + (40 * (i + 2)), y + (40 * (i + 1)));	
    // }

    x = x + 10;
    y = y + 10;

    context.drawImage(img, x, y);
    
    context.drawImage(img, x + 40, y + 40);
    context.drawImage(img, x + 80, y + 40);    
    
    context.drawImage(img, x + 120, y + 80);
    context.drawImage(img, x + 160, y + 80);

    context.drawImage(img, x + 200, y + 120);
}
