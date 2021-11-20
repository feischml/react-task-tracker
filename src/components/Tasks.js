import Task from "./Task"

function Tasks({ tasks }) {
    return (
        <>
            {tasks.map((task) => ( 
                <Task key={task.id} task={task}></Task>
            ))}
        </>
    )
}

export default Tasks
