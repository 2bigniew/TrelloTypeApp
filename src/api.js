const deleteMsg = document.querySelector('.delete-msg');

function deleteTodoTask(task) {
    axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
        // dopisać informacje o pomyślnym usuwaniu
        loader.style = "display: none;";
        console.log(response);
        deleteMsg.innerHTML = `Task "${response.data.taskContent}" deleted successful`;
    });
}

function fromTodoToProgress(task) {
    const target = 'ProgressTasks';
    axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
        axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
            moveTask(secondResponse.data);
            loader.style = "display: none;";
        });
    });
}

function deleteProgressTask(task) {
    axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
        // dopisać informacje o pomyślnym usuwaniu
        loader.style = "display: none;";
        deleteMsg.innerHTML = `Task "${response.data.taskContent}" deleted successful`;
    });
}

function fromProgressToTodo(task) {
    const target = 'TodoTasks';
    axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
        axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
            moveTask(secondResponse.data);
            loader.style = "display: none;";
            deleteMsg.innerHTML = "";
        });
    });
}

function fromProgressToDone(task) {
    const target = 'DoneTasks';
    axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
        axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
            moveTask(secondResponse.data);
            loader.style = "display: none;";
            deleteMsg.innerHTML = "";
        });
    });
}

function deleteDoneTask(task) {
    axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
        // dopisać informacje o pomyślnym usuwaniu
        loader.style = "display: none;";
        deleteMsg.innerHTML = `Task "${response.data.taskContent}" deleted successful`;
    });
}

function fromDoneToProgress(task) {
    const target = 'ProgressTasks';
    axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
        axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
            moveTask(secondResponse.data);
            loader.style = "display: none;";
            deleteMsg.innerHTML = "";
        });
    });
}

function moveTask(task) {
    addNewTask(task);
};