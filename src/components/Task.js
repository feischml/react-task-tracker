import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, onTogle}) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
            onClick={ () => onTogle(task.id)} 
            >
            <h3>{task.text} <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={ () => onDelete(task.id) }></FaTimes>
            </h3>
            <p>{task.day}</p>
            { task.reminder ? (<p>Reminder</p>) : ('')}
        </div>
    )
}

export default Task
