$(document).ready(function(){
    const add_task_btn = $(".add-task");
    const add_task_input = $("#task");
    const task_list = $(".task-list");
    let count = 0

    function addTask() {
        let task = add_task_input.val();
        if (task !== '') {
            count++
            let task_item = $(`<li class = "added-task"></li>`);
            task_item.text(task);
            task_item.append('<button class = "delete"><img src="images/trash.svg" alt=""></button>');
            task_list.append(task_item);
            add_task_input.val('')
        }

        if (count > 5) {
            task_list.css("overflowY", "scroll")
        } else {
            task_list.css("overflowY", "hidden")
        }

    }

    function deleteTask() {
        $(this).parent().addClass("deleted-task")
        $(this).parent().remove();
        count--
    }

    add_task_btn.click(addTask);
    task_list.on('click', '.delete', deleteTask)
})