let home = 0;
let guest = 0;

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

function hPlus1() {
        home += 1
        homeEl.textContent = home;
}

function hPlus2() {
        home += 2;
        homeEl.textContent = home;
}

function hPplus3() {
        home += 3
        homeEl.textContent = home;
}

function hPlus1() {
    home += 1
    homeEl.textContent = home;
}

function hPlus2() {
    home += 2;
    homeEl.textContent = home;
}

function hPlus3() {
    home += 3
    homeEl.textContent = home;
}

function gPlus1() {
    guest += 1
    guestEl.textContent = guest;
}

function gPlus2() {
    guest += 2;
    guestEl.textContent = guest;
}

function gPlus3() {
    guest += 3
    guestEl.textContent = guest;
}

function reset() {
    home = 0;
    guest = 0;
    homeEl.textContent = 0;
    guestEl.textContent = 0;
}