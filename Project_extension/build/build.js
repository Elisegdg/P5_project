var gui = new dat.GUI();
var params = {
    Number_circles: 6,
    Radius_octagons: 26,
};
gui.add(params, "Number_circles", 1, 7, 1);
gui.add(params, "Radius_octagons", 1, 50, 1);
var value = 255;
function draw() {
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    background('white');
    strokeWeight(1);
    color('black');
    if (keyIsPressed == true) {
        var value = 300 + frameCount / 3;
    }
    else {
        var value = 300;
    }
    var radius = params.Radius_octagons;
    for (var nbCercles = 0; nbCercles < params.Number_circles; nbCercles++) {
        for (var alpha_1 = 0; alpha_1 <= 360; alpha_1 += 10) {
            push();
            if (keyIsPressed == true) {
                rotate(alpha_1 + frameCount / 3);
            }
            else {
                rotate(alpha_1 + frameCount / 3);
            }
            beginShape();
            fill(value);
            for (var i = 0; i < 8; i++) {
                if (keyIsPressed == true) {
                    var angle = i / 8 * 360 + frameCount / 2;
                    vertex(cos(angle) * radius + value, sin(angle) * radius);
                }
                else {
                    var angle = i / 8 * 360;
                    vertex(cos(angle) * radius + value, sin(angle) * radius);
                }
            }
            endShape(CLOSE);
            pop();
        }
        if (radius > 0) {
            value = value - radius * 1.8;
            radius = radius - 4;
        }
        else {
            value = value - radius * 5;
            radius = radius - 1;
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map