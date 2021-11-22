import Task from "./Task"

function Tasks({tasks, onDelete, onTogle}) {
    return (
        <>
            {tasks.map((task) => ( 
                <Task key={task.id} task={task} onDelete={onDelete} onTogle={onTogle}></Task>
            ))}
        </>
    )
}

export default Tasks
