document.getElementById('add-btn').addEventListener('click', function() {
    const taskText = document.getElementById('todo-input').value;
    
    if (taskText.trim() !== '') {
        addTask(taskText);
        document.getElementById('todo-input').value = ''; // Bersihkan input setelah menambahkan task
    }
});

function addTask(taskText) {
    const listItem = document.createElement('li');
    
    const taskContent = document.createElement('span');
    taskContent.innerText = taskText;
    taskContent.classList.add('task-content'); // Tambahkan class untuk styling teks tugas

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group'); // Group untuk tombol Edit dan Delete

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', function() {
        if (editBtn.innerText === 'Edit') {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskContent.innerText;
            listItem.insertBefore(editInput, taskContent);
            listItem.removeChild(taskContent);
            editBtn.innerText = 'Save';
        } else {
            const updatedText = listItem.querySelector('input').value;
            taskContent.innerText = updatedText;
            listItem.insertBefore(taskContent, listItem.querySelector('input'));
            listItem.removeChild(listItem.querySelector('input'));
            editBtn.innerText = 'Edit';
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });

    buttonGroup.appendChild(editBtn); // Masukkan tombol Edit ke dalam button-group
    buttonGroup.appendChild(deleteBtn); // Masukkan tombol Delete ke dalam button-group
    listItem.appendChild(taskContent); // Tambahkan teks tugas ke list item
    listItem.appendChild(buttonGroup); // Tambahkan button group ke list item
    document.getElementById('todo-list').appendChild(listItem); // Tambahkan list item ke todo list
}
