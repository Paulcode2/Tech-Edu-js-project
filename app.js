// let input = document.getElementById('input');
// let button = document.getElementById('btn');
// let errMsg = document.getElementById('err');
let input = document.querySelector('#input');
let button = document.querySelector('#btn');
let errMsg = document.querySelector('#err')

// document.querySelectorAll
button.onclick = function(){
    if (input.value === ''){
        errMsg.innerHTML = "Error!!!! Please input a value"

    }
}


// let userData = {
//     username: "",
//     password: "",
//     profilePhoto: "uid"
// }

