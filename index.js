document.addEventListener('DOMContentLoaded', function(event) {

var canvas = new fabric.Canvas('c');

fabric.Image.fromURL('images/front.png', function(img) {
    img.scale(0.5).set({
        left: 100,
        top: 100,
        //angle: -15,
        //clipTo: function (ctx) {
        //    ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
        //}
    });
    canvas.add(img).setActiveObject(img);
});

// create a rectangle object
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 100,
    height: 100
});

// "add" rectangle onto canvas
canvas.add(rect);

}, false)