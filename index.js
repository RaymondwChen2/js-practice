
let count = 0;
let countEl = document.getElementById("count-el")

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