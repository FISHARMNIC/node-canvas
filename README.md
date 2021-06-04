# node-canvas
A library for using canvas in NodeJS
Requires `fs` and `puppeteer`

## To setup
- Import the library from the local file: `const nodeCanvas = require('./nodecanv.js');`
- Create the page: `var canvas = new nodeCanvas({ width: 500, height: 400 })`
  - Change height and width to your liking
- Run your main code in an anon. function
```
canvas.run(function () {
  your code here
}
```
- Treat it like a normal canvas, with the identifier `canvas`
## Image handling
---
- To create an image use `new Image()`
- To make sure you're drawing it after it loads, create a `.onload` event
- See example below
```
var mouse = new Image(500, 400)
mouse.src = "image.jpg"
mouse.onload = function () {
    canvas.drawImage(mouse, 0, 0)
    after_load() //after it finished loading, continue with adding the rest
}
function after_load() { //the rest that I want to add
    canvas.fillStyle = "Blue"
    canvas.fillRect(0, 300, 500, 400)
}
```
