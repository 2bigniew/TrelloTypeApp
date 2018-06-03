// THIS CODE DON'T WORK WITH APPLICATION, BUT IT'S A PIECE OF GOOD CODE SO I SAVE IT.

// function getApiButtons() {
//     const todoList = document.getElementById('todo-list');
//     const progressList = document.getElementById('progress-list');
//     const doneList = document.getElementById('done-list');

//     const todoTasks = document.querySelectorAll('.todo-list-item');
//     const progressTasks = document.querySelectorAll('.progress-list-item');
//     const doneTasks = document.querySelectorAll('.done-list-item');

//     const todoButtons = document.querySelectorAll('.todo-btn');
//     const progressButtons = document.querySelectorAll('.progress-btn');
//     const doneButtons = document.querySelectorAll('.done-btn');


    // todoTasks.forEach(task => {
    //     Array.from(task.children).forEach(taskChild => {
    //         if (taskChild.type === 'button' && taskChild.innerHTML === "Delete") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
    //                     // dopisać informacje o pomyślnym usuwaniu
    //                     todoList.removeChild(task);
    //                 });
    //             }, false);
    //         } else if (taskChild.type === 'button' && taskChild.innerHTML === "Next") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.post(`http://127.0.0.1:5000/${task.id}/ProgressTasks`).then(response => {
    //                     axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
    //                         // moveTask(secondResponse.data);
    //                         todoList.removeChild(task);
    //                     });
    //                 });
    //             }, false);
    //         };
    //     });
    // });

    // progressTasks.forEach(task => {
    //     Array.from(task.children).forEach(taskChild => {
    //         if (taskChild.type === 'button' && taskChild.innerHTML === "Delete") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
    //                     // dopisać informacje o pomyślnym usuwaniu
    //                     progressList.removeChild(task);
    //                 });
    //             }, false);
    //         } else if (taskChild.type === 'button' && taskChild.innerHTML === "Next") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.post(`http://127.0.0.1:5000/${task.id}/DoneTasks`).then(response => {
    //                     axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
    //                         // moveTask(secondResponse.data);
    //                         todoList.removeChild(task);
    //                     });
    //                 });
    //                 progressList.removeChild(task);
    //             }, false);
    //         } else if (taskChild.type === 'button' && taskChild.innerHTML === "Previous") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.post(`http://127.0.0.1:5000/${task.id}/TodoTasks`).then(response => {
    //                     axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
    //                         // moveTask(secondResponse.data);
    //                         todoList.removeChild(task);
    //                     });
    //                 });
    //                 progressList.removeChild(task);
    //             }, false);
    //         };
    //     });
    // });

    // doneTasks.forEach(task => {
    //     Array.from(task.children).forEach(taskChild => {
    //         if (taskChild.type === 'button' && taskChild.innerHTML === "Delete") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.delete(`http://127.0.0.1:5000/delete/${task.id}`).then(response => {
    //                     // dopisać informacje o pomyślnym usuwaniu
    //                     doneList.removeChild(task);
    //                 });
    //             }, false);
    //         } else if (taskChild.type === 'button' && taskChild.innerHTML === "Previous") {
    //             taskChild.addEventListener('click', () => {
    //                 axios.post(`http://127.0.0.1:5000/${task.id}/ProgressTasks`).then(response => {
    //                     axios.post(`http://127.0.0.1:5000/tasks/${task.id}`).then(secondResponse => {
    //                         //moveTask(secondResponse.data);
    //                         doneList.removeChild(task);
    //                     });
    //                 });
    //             }, false);
    //         };
    //     });
    // });

    // console.log(todoTasks);
    // console.log(progressTasks);
    // console.log(doneTasks);
// };