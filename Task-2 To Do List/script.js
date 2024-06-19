// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task');
    
    addTaskButton.addEventListener('click', () => {
        const taskName = document.getElementById('task-name').value;
        const taskPriority = document.getElementById('task-priority').value;
        const taskCategory = document.getElementById('task-category').value;
        const taskDueDate = document.getElementById('task-due-date').value;

        if (taskName) {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            taskCard.innerHTML = `
                <div>
                    <h3>${taskName}</h3>
                    <p>Priority: ${taskPriority}</p>
                    <p>Category: ${taskCategory}</p>
                    <p>Due Date: ${taskDueDate}</p>
                </div>
                <div>
                    <button class="complete-task">Complete</button>
                    <button class="delete-task">Delete</button>
                </div>
            `;

            taskList.appendChild(taskCard);

            // Add event listener for complete button
            taskCard.querySelector('.complete-task').addEventListener('click', () => {
                taskCard.classList.toggle('complete');
            });

            // Add event listener for delete button
            taskCard.querySelector('.delete-task').addEventListener('click', () => {
                taskCard.remove();
            });

            // Clear input fields
            document.getElementById('task-name').value = '';
            document.getElementById('task-priority').value = 'low';
            document.getElementById('task-category').value = 'work';
            document.getElementById('task-due-date').value = '';
        }
    });
});
