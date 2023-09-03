let x;
let y;
let z;
document.getElementById('roll').onclick = function() {
    x = Math.floor(Math.random() * 6) + 1
    y = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1

    document.getElementById('l-x').innerText = ' ' + x
    document.getElementById('l-y').innerText = ' ' + y
    document.getElementById('l-z').innerText = ' ' + z
}
