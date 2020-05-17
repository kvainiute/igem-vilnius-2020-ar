/*var overlapThreshold = "5%";
var or, st, pr, an, gf;
var centArr = [];
var centers = document.querySelectorAll(".st5");
centArr = [];
centers.forEach(function (center) {
    centArr.push({
        x: center.getBoundingClientRect().x,
        y: center.getBoundingClientRect().y
    });
});
console.log(centArr);

function printMousePos(event) {
    console.log("clientX: " + event.clientX +
        " - clientY: " + event.clientY);
}

function reportWindowSize() {
    centArr = [];
    centers.forEach(function (center) {
        centArr.push({
            x: center.getBoundingClientRect().left,
            y: center.getBoundingClientRect().right
        });
    });
    console.log(centArr);
}

document.addEventListener("click", printMousePos);
window.addEventListener('resize', reportWindowSize);

document.getElementById("dna-show").addEventListener('mouseenter', function () {
    document.getElementById("dna-s").style.display = "block";
    document.getElementById("dna-push").style.display = "none";
});
document.getElementById("dna-show").addEventListener('mouseleave', function () {
    document.getElementById("dna-s").style.display = "none";
    document.getElementById("dna-push").style.display = "block";
});


var unFito = false;
Draggable.create("#ori-p", {
    type: "x,y",
    onDrag: function () {
        if (this.hitTest("#ori-d", overlapThreshold)) {
            or = true;
        } else if (this.hitTest(".no", overlapThreshold)) {
            unFito = true;
            console.log(unFito);
        } else {
            or = false;
            unFito = false;
        }
    },
    onDragEnd: function () {
        if (!or && !unFito) {
            TweenLite.to(this.target, 0.2, {
                x: 0,
                y: 0
            });
        }
    }
});
var unFits = false;
Draggable.create("#stop-p", {
    onDrag: function () {
        if (this.hitTest("#stop-d", overlapThreshold)) {
            st = true;
        } else if (this.hitTest(".ns", overlapThreshold)) {
            unFits = true;
            console.log(unFits);
        } else {
            st = false;
            unFits = false;
        }
    },
    onDragEnd: function () {
        if (!st && !unFits) {
            TweenLite.to(this.target, 0.2, {
                x: 0,
                y: 0
            });
        }
    }
});
var unFitp = false;
Draggable.create("#prom-p", {
    onDrag: function () {
        if (this.hitTest("#prom-d", overlapThreshold)) {
            pr = true;
        } else if (this.hitTest(".np", overlapThreshold)) {
            unFitp = true;
            console.log(unFitp);
        } else {
            pr = false;
            unFitp = false;
        }
    },
    onDragEnd: function () {
        if (!pr && !unFitp) {
            TweenLite.to(this.target, 0.2, {
                x: 0,
                y: 0
            });
        }
    }
});
var unFitg = false;
Draggable.create("#gfp-p", {
    onDrag: function () {
        if (this.hitTest("#gfp-d", overlapThreshold)) {
            gf = true;
        } else if (this.hitTest(".ng", overlapThreshold)) {
            unFitg = true;
            console.log(unFitg);
        } else {
            gf = false;
            unFitg = false;
        }
    },
    onDragEnd: function () {
        if (!gf && !unFitg) {
            TweenLite.to(this.target, 0.2, {
                x: 0,
                y: 0
            });
        }
    }
});
var unFita = false;
Draggable.create("#antib-p", {
    snap: function (value) {
        return Math.round(value / 90) * 90;
    },
    onDrag: function () {
        if (this.hitTest("#antib-d", overlapThreshold)) {
            an = true;

        } else if (this.hitTest(".na", overlapThreshold)) {
            unFita = true;
        } else {
            an = false;
            unFita = false;
        }
    },
    onDragEnd: function () {
        if (!an && !unFita) {
            TweenLite.to(this.target, 0.2, {
                x: 0,
                y: 0
            });
            document.getElementById("ap").style.transform = "rotate(90deg)";
        } else if (an) {
            document.getElementById("ap").style.transform = "initial";
        }
    }
});

var finish = false;
var myTimer = setInterval(function () {
    console.log(or, an, pr, st, gf);
    if (gf && pr && st && or && an) {
        console.log("DONE");
        document.getElementById("plasmid-main").style.display = "none";
        var parts = document.querySelectorAll(".p");
        console.log(parts);
        parts.forEach(function (p) {
            p.style.display = "none";
        });
        document.getElementById("result").style.display = "block";
        clearInterval(myTimer);
    }
}, 2000);*/

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
    ev.dataTransfer.dropEffect = "move";
}

window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("prom-p");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
});
