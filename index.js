document.addEventListener('DOMContentLoaded', function(event) {

var canvas = new fabric.Canvas('c');
// create a rectangle object
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);

}, false)