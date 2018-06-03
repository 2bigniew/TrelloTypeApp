const deleteMsg = document.querySelector('.delete-msg');

function deleteTodoTask(task) {
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
                loader.style = "display: none;";
                deleteMsg.innerHTML = `Task "${response.data.taskContent}" deleted successful`;
            });
        } else {
            loader.style = "display: none;";
        };
    });
}

function fromTodoToProgress(task) {
    const target = 'ProgressTasks';
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
                axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
                    moveTask(secondResponse.data);
                    loader.style = "display: none;";
                });
            });
        } else {
            loader.style = "display: none;";
        };
    });
};


function deleteProgressTask(task) {
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
                loader.style = "display: none;";
                deleteMsg.innerHTML = `Task "${response.data.taskContent}" deleted successful`;
            });
        } else {
            loader.style = "display: none;";
        };
    });
};


function fromProgressToTodo(task) {
    const target = 'TodoTasks';
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
                axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
                    moveTask(secondResponse.data);
                    loader.style = "display: none;";
                    deleteMsg.innerHTML = "";
                });
            });
        } else {
            loader.style = "display: none;";
        };
    });
};


function fromProgressToDone(task) {
    const target = 'DoneTasks';
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
                axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
                    moveTask(secondResponse.data);
                    loader.style = "display: none;";
                    deleteMsg.innerHTML = "";
                });
            });
        } else {
            loader.style = "display: none;";
        };
    });
};


function deleteDoneTask(task) {
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
                // dopisać informacje o pomyślnym usuwaniu
                loader.style = "display: none;";
                deleteMsg.innerHTML = `Task "${response.data.taskContent}" deleted successful`;
            });
        } else {
            loader.style = "display: none;";
        };
    });
};


function fromDoneToProgress(task) {
    const target = 'ProgressTasks';
    axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(check => {
        if (task.dataset.taskState === check.data.taskState) {
            axios.post(`http://127.0.0.1:5000/${task.id}/${target}`).then(response => {
                axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
                    moveTask(secondResponse.data);
                    loader.style = "display: none;";
                    deleteMsg.innerHTML = "";
                });
            });
        } else {
            loader.style = "display: none;";
        };
    });


};

function moveTask(task) {
    addNewTask(task);
};