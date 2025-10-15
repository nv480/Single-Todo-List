const takeTask = () => {
    const task = document.querySelector('#task').value

    if(!task) {
        message('Debe ingresar una tarea')
        return
    }

    todoList(task)
}

const message = (error) => {
    const messageContent = document.querySelector('.show-message')

    const msgElement = document.createElement('p')
    msgElement.textContent = error
    msgElement.classList.add('error')

    messageContent.append(msgElement)

    deleteMessage(msgElement)
}

const deleteMessage = (deleteMsg) => {
    setTimeout(() => {
        deleteMsg.remove()
    }, 2000)
}

const todoList = (task) => {
    const content = document.querySelector('.todo-content')

    const showTask = document.createElement('h3')
    showTask.textContent = task
    showTask.classList.add('task-name')

    const list = document.createElement('div')
    list.classList.add('todo-list')
    
    list.append(showTask)

    content.append(list)

    deleteTask(list)
}

const deleteTask = (list) => {
    const btn = document.createElement('button')
    btn.classList.add('btn-delete')

    list.append(btn)

    btn.addEventListener('click', () => btn.parentElement.remove())
}

document.querySelector('#addTask').addEventListener('click', (e) => {
    e.preventDefault()
    takeTask()
})