document.addEventListener('DOMContentLoaded', function(event) {

var canvas = new fabric.Canvas('c');
var t = new fabric.Text('hello world', { left: 400, top: 300 });

fabric.Image.fromURL('images/front.png', function(img) {
    img.scale(1).set({
        left: 200,
        top: 100,

        //angle: -15,
        //clipTo: function (ctx) {
        //    ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
        //}
    });
    canvas.add(img);
    canvas.add(t).setActiveObject(t);
    canvas.bringToFront(t);
});



document.getElementById('btn_front').addEventListener('click', function(evt) {
    let txt= document.getElementById('fronttext').value;
    t.text = txt;
    canvas.renderAll();
}, false);

}, false)