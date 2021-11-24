import Task from "./Task"

function Tasks({tasks, onDelete, onTogle}) {
    return (
        <>
            {tasks.map((task, index) => ( 
                <Task key={index} task={task} onDelete={onDelete} onTogle={onTogle}></Task>
            ))}
        </>
    )
}

export default Tasks
