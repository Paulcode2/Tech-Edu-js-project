let newTask = document.querySelector('#form input');
let btn = document.querySelector('#btn');
let errTxt = document.getElementById('err')
let lists = document.querySelector('.list')


btn.onclick = function (){
    if (newTask.value.length == 0){
        errTxt.innerHTML = "Please Enter a task"
        setTimeout(() => timeOut(), 3000,);
    }
    else{
        tasks.innerHTML += `
            <div class="list">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                   delete
                </button>
            </div>
        `;

        let current = document.querySelectorAll(".delete");
        for (let i = 0; i < current.length; i++){
            current[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

function timeOut(){
    errMsg.style.display = "none"
}
