var fs = require('fs');
const puppeteer = require('puppeteer');

var dir = "nodecanvas.html"

var cStarter = `<canvas id="canvas" `
var cEnd = `></canvas>`

module.exports = class nodeCanvas {
    constructor({ width = "100", height = "100" } = {}) {
        fs.writeFileSync(`${dir}`, ``,
            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        writeHtml(`
            ${cStarter} width="${width}" height="${height}"${cEnd}
            <script>
            var canvas = document.getElementById("canvas").getContext("2d")
            </script>
        `)

    }

    run(code) {
        var codeArr = code.toString().substring(13).slice(0, -1).split("\n")
        // var dupar = codeArr.slice()

        // codeArr.forEach((element, index) => {
        //     dupar[index] = element.trim()

        //     if (element == "") {
        //         dupar.splice(index, 1)
        //     }
        //     //index -= 1
        // });
        // dupar.shift()
        // codeArr = dupar.slice()

        // codeArr.forEach((element, index) => {
        //     codeArr[index] = `ctx.${element}`
        // });
        console.log(codeArr)

        writeHtml(`
        <script>
            ${codeArr.join('\n')}
        </script>`)
    }

    capture(location) {
        (async () => {
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();

            await page.goto('file:///Users/squijano/Documents/jsprojects/node_canvas/nodecanvas.html', { waitUntil: 'networkidle2' })

            await page.focus('canvas[id=canvas]')

            // Select the #svg img element and save the screenshot.
            const svgImage = await page.$('canvas[id=canvas]');
            await svgImage.screenshot({
                path: `${location}`,
                omitBackground: true,
            });
            //await page.pdf({ path: 's1.pdf', format: 'a4' });
            browser.close()

            fs.unlinkSync("nodecanvas.html")
        })();
        
    }

}

function writeHtml(data) {
    // fs.writeFileSync(`${dir}`, `${data}`,
    //     function (err) {
    //         if (err) throw err;
    //         console.log('Saved!');
    //     });
    fs.appendFileSync(`${dir}`, data)
}
