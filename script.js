
function $(id) {
    return document.getElementById(id);
}

function setText(id, text) {
    $(id).textContent = text;
}


let count = 0;

function myFunc() {
    count++;
    return count;
}


function getRandomNum(max) {
    max = parseInt(max);

    if (isNaN(max) || max < 1) {
        return 0;
    }

    return Math.floor(Math.random() * max) + 1;
}


function myAdder(x, y) {
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);

    return num1 + num2;
}


function distance(x1, y1, x2, y2) {
    x1 = parseFloat(x1);
    y1 = parseFloat(y1);
    x2 = parseFloat(x2);
    y2 = parseFloat(y2);

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}


function quadratic(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    let disc = b * b - 4 * a * c;

    if (disc > 0) {
        let r1 = (-b + Math.sqrt(disc)) / (2 * a);
        let r2 = (-b - Math.sqrt(disc)) / (2 * a);
        return [r1, r2];
    } else if (disc === 0) {
        return [-b / (2 * a)];
    } else {
        let real = (-b / (2 * a));
        let imag = Math.sqrt(-disc) / (2 * a);
        return [real + "+" + imag + "i", real + "-" + imag + "i"];
    }
}


function onMyFuncClick() {
    setText("outMyFunc", myFunc());
}

function onRandomClick() {
    let max = $("maxRand").value;
    setText("outRandom", getRandomNum(max));
}

function onAdderClick() {
    let x = $("addX").value;
    let y = $("addY").value;
    setText("outAdder", myAdder(x, y));
}

function onDistanceClick() {
    let x1 = $("x1").value;
    let y1 = $("y1").value;
    let x2 = $("x2").value;
    let y2 = $("y2").value;
    setText("outDistance", distance(x1, y1, x2, y2));
}

function onQuadraticClick() {
    let a = $("qa").value;
    let b = $("qb").value;
    let c = $("qc").value;

    let result = quadratic(a, b, c);
    setText("outQuadratic", result.join(", "));
}