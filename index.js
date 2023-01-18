
let count = 0;
let countEl = document.getElementById("count-el");
let prev = document.getElementById("prev");

function increment() {
    count += 1;
    countEl.innerHTML = count;
}
function decrement() {
    if (count !== 0) {
        count -= 1;
        countEl.innerHTML = count;
    }
}

function save() {
    prev.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
}