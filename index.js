document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Функция для добавления новой задачи
    function addTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('task-item');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const actions = document.createElement('span');
        actions.classList.add('task-actions');
        actions.innerHTML =`
            <button class="edit-btn">Редактировать</button>
            <button class="delete-btn">Удалить</button>
            <button class="complete-btn">Выполнено</button>
        `;

        li.appendChild(taskContent);
        li.appendChild(actions);

        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const target = event.target;
        const taskItem = target.closest('.task-item');

        if (taskItem) {
            if (target.classList.contains('delete-btn')) {
                taskItem.remove();
            } else if (target.classList.contains('complete-btn')) {
                taskItem.classList.toggle('completed');
            } else if (target.classList.contains('edit-btn')) {
                const newTaskText = prompt('Редактировать задачу:', taskItem.querySelector('span').textContent);
                if (newTaskText !== null && newTaskText.trim() !== '') {
                    taskItem.querySelector('span').textContent = newTaskText;
                }
            }
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});