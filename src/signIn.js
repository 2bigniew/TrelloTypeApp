const username = document.getElementById('input-username');
const pass = document.getElementById('input-pass');
const signInErr = document.getElementById('sign-in-error');
const signInBtn = document.getElementById('sign-in-btn');
const signOutBtn = document.getElementById('sign-out-btn');
const hello = document.getElementById('hello');
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

const Task = function (user, taskeState, taskContent) {
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
    }, 15000);
}

function stopFocusOnPass() {
    clearTimeout(username);
}


function focusOnUsername() {
    setTimeout(() => {

        if (username.value === '') {
            username.focus();
        }
        pass.style = "border: 1px solid green;";
    }, 15000);
}

function stopFocusOnUsername() {
    clearTimeout(pass);
}


function getUserAndPass() {
    if (username.value === '' || pass.value === '') {
        signInErr.innerHTML = "Fill in username and password fields"
    } else {
        signInErr.innerHTML = "";
        loader.style = "display: block;";
        axios.get(`http://127.0.0.1:5000/${username.value}/${pass.value}`).then(response => {
            if (response.data.length === 0) {
                axios.post(`http://127.0.0.1:5000/setupUser/${username.value}/${pass.value}`).then(secondResponse => {
                    hello.innerHTML = 'Created user: ' +
                    secondResponse.data.username +
                    ' Successful! You can add your tasks now as user: ' +
                    secondResponse.data.username;

                    loader.style = "display: none;";
                    readyToAddTasks();
                    hello.dataset.username = secondResponse.data.username;
                });
            } else {
                hello.innerHTML = 'Hello ' + response.data[0].username + '!';
                hello.dataset.username = response.data[0].username;
                getStartData(username.value);
                readyToAddTasks();
            }
        });
    };
};


function addTodoTask() {
    loader.style = 'display: block;';
    const newTask = new Task(hello.dataset.username, 'TodoTasks', inputTask.value);
    axios.post(`http://127.0.0.1:5000/setupTasks/${newTask.username}/${newTask.taskState}/${newTask.taskContent}`).then(response => {
        addNewTask(response.data);
        loader.style = 'display: none;';
        inputTask.value = '';
        document.querySelector('.delete-msg').innerHTML = "";
    });
}

function readyToAddTasks() {
    username.value = '';
    username.style = 'border: 1px solid rgb(98, 69, 102);';
    pass.value = '';
    pass.style = 'border: 1px solid rgb(98, 69, 102);';
    inputTask.disabled = false;
    addTaskBtn.classList.remove('disabled');
    addTaskBtn.disabled = false;
    signInBtn.classList.add('disabled');
    signInBtn.disabled = true;
    signOutBtn.classList.remove('out-btn');
    username.disabled = true;
    pass.disabled = true;
}

function signOutFunction() {
    window.location.reload(true);
}


username.addEventListener('input', focusOnPass, false);
pass.addEventListener('input', focusOnUsername, false);
username.addEventListener('blur', stopFocusOnPass, false);
pass.addEventListener('blur', stopFocusOnUsername, false);

signInBtn.addEventListener('click', getUserAndPass, false);
addTaskBtn.addEventListener('click', addTodoTask, false);
signOutBtn.addEventListener('click', signOutFunction, false);