const loader = document.getElementById('loader');

function getStartData(username) {

    const tasks = [];
    

    axios.get(`http://127.0.0.1:5000/${username}`).
    then(response => {
        response.data.forEach((task, i) => {
            addNewTask(task);
            loader.style = "display: none;";
        });
    });
};

function addNewTask(task) {
    const todoList = document.getElementById('todo-list');
    const progressList = document.getElementById('progress-list');
    const doneList = document.getElementById('done-list');

    const li = document.createElement('li');
    const btnNext = document.createElement('button');
    const btnDelete = document.createElement('button');
    const btnPrevious = document.createElement('button');
    const p = document.createElement('p');

    btnNext.innerHTML = 'Next';
    btnNext.classList.add('btn');
    btnNext.classList.add('btn-sm');
    btnNext.classList.add('btn-outline-info');
    btnNext.type = 'button';
    btnNext.style = 'margin: 5px 15px;';
    btnDelete.innerHTML = 'Delete';
    btnDelete.classList.add('btn');
    btnDelete.classList.add('btn-outline-info');
    btnDelete.classList.add('btn-sm');
    btnDelete.type = 'button';
    btnDelete.style = 'margin: 5px 5px;';
    btnPrevious.innerHTML = 'Previous';
    btnPrevious.classList.add('btn');
    btnPrevious.classList.add('btn-sm');
    btnPrevious.classList.add('btn-outline-info');
    btnPrevious.type = 'button';
    btnPrevious.style = 'margin: 5px 15px;';
    p.innerHTML = task.taskContent;
    
    li.classList.add('list-group-item');
    li.dataset.username = task.username;
    li.dataset.taskState = task.taskState;
    li.dataset.taskContent = task.taskContent;
    li.id = task._id;

    if (task.taskState === 'TodoTasks') {
        btnDelete.classList.add('todo-btn');
        btnDelete.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            deleteTodoTask(task);
            deleteParentListItem(buttonClicked);
        } , false);
        btnNext.classList.add('todo-btn');
        btnNext.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            fromTodoToProgress(task)
            deleteParentListItem(buttonClicked);
        } , false);
        li.classList.add('todo-list-item');
        li.appendChild(p);
        li.appendChild(btnDelete);
        li.appendChild(btnNext);
        todoList.appendChild(li);
    } else if (task.taskState === 'ProgressTasks') {
        btnDelete.classList.add('progress-btn');
        btnDelete.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            deleteProgressTask(task);
            deleteParentListItem(buttonClicked);
        } , false);
        btnNext.classList.add('progress-btn');
        btnNext.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            fromProgressToDone(task);
            deleteParentListItem(buttonClicked);
        } , false);
        btnPrevious.classList.add('progress-btn');
        btnPrevious.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            fromProgressToTodo(task)
            deleteParentListItem(buttonClicked);
        } , false);
        li.classList.add('progress-list-item');
        li.appendChild(p);
        li.appendChild(btnPrevious);
        li.appendChild(btnDelete);
        li.appendChild(btnNext);
        progressList.appendChild(li);
    } else {
        btnDelete.classList.add('done-btn');
        btnDelete.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            deleteDoneTask(task)
            deleteParentListItem(buttonClicked);
        } , false);
        btnPrevious.classList.add('done-btn');
        btnPrevious.addEventListener('click',function(){
            loader.style = "display: block;";
            const task = this.parentNode;
            const buttonClicked = this;
            fromDoneToProgress(task);
            deleteParentListItem(buttonClicked);
        } , false);
        li.classList.add('done-list-item');
        li.appendChild(p);
        li.appendChild(btnPrevious);
        li.appendChild(btnDelete);
        doneList.appendChild(li);
    };
}

function deleteParentListItem(buttonClicked) {
    const parentLi = buttonClicked.parentNode;
    const parentUl = parentLi.parentNode;
    parentUl.removeChild(parentLi); 
}