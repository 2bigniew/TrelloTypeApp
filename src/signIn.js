const username = document.getElementById('input-username');
const pass = document.getElementById('input-pass');
const signInErr = document.getElementById('sign-in-error');
const signInBtn = document.getElementById('sign-in-btn'); 
const hello = document.getElementById('hello');
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

const Task = function(user, taskeState, taskContent) {
    this.username = user;
    this.taskState = taskeState;
    this.taskContent = taskContent;
};


function focusOnPass() {
    setTimeout(() => {

        if (pass.value === '') {
            pass.focus();
        }
        username.style = "border: 1px solid green;";
    }, 5000);
}


function focusOnUsername() {
    setTimeout(() => {

        if (username.value === '') {
            username.focus();
        }
        pass.style = "border: 1px solid green;";
    }, 5000);
}


function getUserAndPass() {
    if (username.value === '' || pass.value === '') {
        signInErr.innerHTML = "Fill in username and password fields"
    } else {
        loader.style = "display: block;";
        axios.get(`http://127.0.0.1:5000/${username.value}/${pass.value}`).then( response => {
            if (response.data.length === 0) {
                axios.post(`http://127.0.0.1:5000/setupUser/${username.value}/${pass.value}`).then( secondResponse => {
                    hello.innerHTML = 'Created user: ' + secondResponse.data.username + ' Successful!'; 
                    loader.style = "display: none;";
                });
            } else {
                hello.innerHTML = 'Hello ' + response.data[0].username + '!';
                hello.dataset.username = response.data[0].username;
                getStartData(username.value);
                username.value = '';
                username.style = 'border: none;';
                pass.value = '';
                pass.style = 'border: none;';
                inputTask.disabled = false;
                addTaskBtn.classList.remove('disabled');
            }
        });
    };
};


function addTodoTask() {
    loader.style = "display: block;";
    const newTask = new Task(hello.dataset.username, 'TodoTasks', inputTask.value);
    console.log(newTask);
    axios.post(`http://127.0.0.1:5000/setupTasks/${newTask.username}/${newTask.taskState}/${newTask.taskContent}`).then( response => {
        addNewTask(response.data);
        loader.style = "display: none;";
    });
    //'/setupTasks/:username/:taskState/:taskConten
}



username.addEventListener('input', focusOnPass, false);
pass.addEventListener('input', focusOnUsername, false);
signInBtn.addEventListener('click', getUserAndPass,false);
addTaskBtn.addEventListener('click', addTodoTask, false);