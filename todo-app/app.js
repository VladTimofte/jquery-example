$(document).ready(function() {
    // Adauga un todo nou
    $('#add-task').on('click', function() {
        const taskText = $('#task-input').val();

        if (!taskText.length) {
            return alert('Te rog introdu un todo!')
        }

        if (taskText) {
            const newTask = $('<li>').text(taskText)
            const deleteButton = $('<button class="delete">Sterge</button>')
            
            //Verifica daca are clasa completed si daca nu adauga si vice - versa.
            newTask.on('click', function() {
                $(this).toggleClass('completed')
            })

            // Sterge todo
            deleteButton.on('click', function(event) {
                event.stopPropagation()
                newTask.remove();
            })

            // Cosntruim elementul todo (lista <li>)
            newTask.append(deleteButton)
            $('#task-list').append(newTask)
            $('#task-input').val('')
        }
    })

    // Adauga un todo atunci cand se apasa tasta ENTER
    $('#task-input').on('keypress', function(event) {
        console.log(event)
        if (event.originalEvent.keyCode === 13) {
            $("#add-task").click()
        }
    })
})