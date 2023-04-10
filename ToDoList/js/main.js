let button = document.querySelector('#button');
let taskslist = document.querySelector('.taskslist')
let number = document.getElementById('h11');

let count = 0;

function Add() {
    count++;
    let a = document.createElement('h3')
    let b = document.createElement('button')
    let div = document.createElement('div')
    let inp = document.getElementById('inp').value
    let inp1 = inp.toUpperCase()
    div.className = 'task'

    div.append(a, b)
    taskslist.append(div)

    b.innerHTML = 'Delete';
    a.innerHTML = inp1;
    number.innerHTML = count;

    b.onclick = function () {
        count--;
        div.remove();
        number.innerHTML = count;
    }
}