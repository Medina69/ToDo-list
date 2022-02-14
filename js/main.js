let label = document.getElementsByTagName('label')[0]
let input = document.getElementsByClassName('input')[0]
let btn0 = document.getElementsByTagName('button')[0]
let reverse = document.getElementById('btn')
let ol = document.getElementsByTagName('ol')[0]
let arr = [];
const refresh = () => {
    input.value = '';
}
btn0.onclick = () => {
    let textAdd = input.value
    if(textAdd !== ''){
        arr.push(textAdd);
        ol.innerHTML += `<li> ${textAdd}</li>`
        label.innerText = ''
        label.innerText = `My to do(${arr.length})`
    } else{
        alert('напишете текст что нибудь')  
    }
    refresh()
}
reverse.onclick = () => {
    ol.innerHTML = ''
    arr.reverse().map(v => {
    ol.innerHTML += `<li> ${v}</li>`
    });
}  