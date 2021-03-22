// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

/*function drawOctogone() {

    strokeWeight(10)
    stroke(0)
    translate(width / 2, height / 2)
    beginShape()
    for (let i = 0; i < 8; i++) {
        const radius = 100
        const angle = i / 8 * TWO_PI
        vertex(cos(angle) * radius, sin(angle) * radius)
    }

    endShape(CLOSE)
}*/

function draw() {

    angleMode(DEGREES)

    // initialisation de la page

    translate(width / 2, height / 2)
    background('white');
    strokeWeight(1)
    color('black')


    let value = 230
    let radius = 20

    for (let nbCercles = 0; nbCercles < 10; nbCercles++) {
        for (let alpha = 0; alpha <= 360; alpha += 10) {
            push()
            rotate(alpha)

            // dessiner l'octogone 
            beginShape()
            for (let i = 0; i < 8; i++) {
                const angle = i / 8 * 360
                vertex(cos(angle) * radius + value, sin(angle) * radius)
            }
            endShape(CLOSE)

            pop()
        }

        value = value - radius - 8
        radius = radius - 2
    }




    /* beginShape()
     for (let i = 0; i < 8; i++) {
         const radius = 100
         const angle = i / 8 * TWO_PI
         vertex(cos(angle) * radius, sin(angle) * radius)
     }
     endShape(CLOSE)*/
    /*for (let x = 100; x < 300; x += 10) {
            for (let y = 100; y < 300; y += 10) {
                translate(x, y)
                for (let alpha = 0; alpha < 360; alpha += 20) {
                    rotate(alpha);
                    beginShape()
                    for (let i = 0; i < 8; i++) {
                        const radius = 100
                        const angle = i / 8 * TWO_PI
                        vertex(cos(angle) * radius, sin(angle) * radius)
                    }
                    endShape(CLOSE)
    
                }
    
            }
    
    
        }*/


    /*scale(1)
    translate(width / 2, 100)
    strokeWeight(3)
    color('black')
    beginShape()
    for (let i = 0; i < 8; i++) {
        const radius = 100
        const angle = i / 8 * TWO_PI
        vertex(cos(angle) * radius, sin(angle) * radius)
    }
    endShape(CLOSE)/*



    /*for (let alpha = 0; alpha < 360; alpha += 10) {
        rotate(alpha)
        strokeWeight(10)
        stroke(0)
        //translate(width / 2, height / 2)
        beginShape()
        for (let i = 0; i < 8; i++) {
            const radius = 100
            const angle = i / 8 * TWO_PI
            vertex(cos(angle) * radius, sin(angle) * radius)
        }

        endShape(CLOSE)


    }*/

    /*for (let x = width / 2; x < width; x++) {
        for (let y = height / 2; y < height; y++) {
            translate(x, y);
            strokeWeight(10)
            stroke(0)
            //translate(width / 2, height / 2)
            scale(0.5)
            beginShape()
            for (let i = 0; i < 8; i++) {
                const radius = 100
                const angle = i / 8 * TWO_PI
                vertex(cos(angle) * radius, sin(angle) * radius)
            }

            endShape(CLOSE)
        }

    }*/


}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}