let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}
function save(){
    let oldEntries = count + " - "
    saveEl.textContent += oldEntries
    countEl.textContent = 0
    count = 0
}