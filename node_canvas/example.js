const nodeCanvas = require('./nodecanv.js');
var canvas = new nodeCanvas({ width: 500, height: 400 }) //setup canvas

canvas.run(function () {
    var mouse = new Image(500, 400) 
    mouse.src = "webassets/cdw.jpg"
    mouse.onload = function () {
        canvas.drawImage(mouse, 0, 0, 500, 300)
        after_load()
    }
    function after_load() { //after the mouse image is drawn, draw the rest
        canvas.fillStyle = "Blue"
        canvas.fillRect(0, 300, 500, 400)

        canvas.font = "30px Arial"
        canvas.fillStyle = "White"
        canvas.fillText("Change da world", 0, 330)
        canvas.fillText("my final message. Goodb ye", 0, 380)
    }
    

})
canvas.capture("canvas.jpg") //save as canvas.jpg
