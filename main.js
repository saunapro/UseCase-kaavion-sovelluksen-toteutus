/*1*/


let tyk1 = false;
let eit1 = false;

let ei1 = document.getElementById("numk1");
let kyl1 = document.getElementById("nume1")

function tykkays1(event) {
    event.preventDefault();

    if (eit1 == true) {
        alert("Olet jo äänestänyt!")
        return;
    }
    const kuva = document.getElementById("t1");
    kuva.disabled = true;
    kuva.src = "kuva/yc.jpg";
    tyk1 = true;
    kyl1.innerText = +1;
}
function eiTykkays1() {
    if (tyk1 == true) {
        alert("Olet jo äänestänyt!")
        return;
    }
    const kuva = document.getElementById("e1");
    kuva.disabled = true;
    kuva.src = "kuva/nc.jpg";
    eit1 = true;
    ei1.innerText = +1;
}


/*2*/


let tyk2 = false;
let eit2 = false;

let ei2 = document.getElementById("nume2");
let kyl2 = document.getElementById("numk2")

function tykkays2() {
    if (eit2 == true) {
        alert("Olet jo äänestänyt!")
        return;
    }
    const kuva = document.getElementById("t2");
    kuva.disabled = true;
    kuva.src = "kuva/yc.jpg";
    tyk2 = true;
    ei2.innerText = +1;
}
function eiTykkays2() {
    if (tyk2 == true) {
        alert("Olet jo äänestänyt!")
        return;
    }
    const kuva = document.getElementById("e2");
    kuva.disabled = true;
    kuva.src = "kuva/nc.jpg";
    eit2 = true;
    kyl2.innerText = +1;
}


/*3*/


let tyk3 = false;
let eit3 = false;

let ei3 = document.getElementById("nume3");
let kyl3 = document.getElementById("numk3")


function tykkays3() {
    if (eit3 == true) {
        alert("Olet jo äänestänyt!")
        return;
    }
    const kuva = document.getElementById("t3");
    kuva.disabled = true;
    kuva.src = "kuva/yc.jpg";
    tyk3 = true;
    ei3.innerText = +1;
}
function eiTykkays3() {
    if (tyk3 == true) {
        alert("Olet jo äänestänyt!")
        return;
    }
    const kuva = document.getElementById("e3");
    kuva.disabled = true;
    kuva.src = "kuva/nc.jpg";
    eit3 = true;
    kyl3.innerText = +1;
}


