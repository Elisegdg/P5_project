// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Number_circles: 6,
    Radius_octagons: 26,
}
gui.add(params, "Number_circles", 1, 7, 1)
gui.add(params, "Radius_octagons", 1, 50, 1)

let value = 255


// -------------------
//       Drawing
// -------------------



function draw() {

    angleMode(DEGREES)

    // Initialisation of the page to start creating the work

    translate(width / 2, height / 2)
    background('white');
    strokeWeight(1)
    color('black')


    if (keyIsPressed == true) {
        var value = 300 + frameCount / 3  // Position of the next circle of octagons 

    } else {
        var value = 300  // Position of the next circle of octagons 
    }

    var radius = params.Radius_octagons // Radius of the octagons

    // Draw multiple circles and change the octagons size for each circle

    for (let nbCercles = 0; nbCercles < params.Number_circles; nbCercles++) {

        // Draw a circle composed of octagons

        for (let alpha = 0; alpha <= 360; alpha += 10) {

            push()
            if (keyIsPressed == true) {
                rotate(alpha + frameCount / 3)
            } else {
                rotate(alpha + frameCount / 3)
            }

            // Draw one octagon
            beginShape()
            fill(value)
            for (let i = 0; i < 8; i++) {

                if (keyIsPressed == true) {
                    const angle = i / 8 * 360 + frameCount / 2
                    vertex(cos(angle) * radius + value, sin(angle) * radius)
                } else {
                    const angle = i / 8 * 360
                    vertex(cos(angle) * radius + value, sin(angle) * radius)
                }
            }
            endShape(CLOSE)

            pop()
        }

        if (radius > 0) {
            value = value - radius * 1.8
            radius = radius - 4

        } else {
            value = value - radius * 5
            radius = radius - 1

        }

    }

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