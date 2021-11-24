import Header from "./components/Header";
import { useState, useEffect } from 'react'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {

  const[toggleTaskComponent, toggleShowTaskComponent] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const fetchTasksFromServer = await fetchTasks()
      setTasks(fetchTasksFromServer)
    }
    getTasks()
  },[])

  const fetchTasks = async () => {
    const res =  await fetch('http://localhost:5000/tasks')
    return await res.json()
  }

  const deleteTask = async (id) => {
    await fetch('http://localhost:5000/tasks/' + id, { method: 'DELETE' })
    setTasks(tasks.filter( (task) => task.id !== id ))
  } 

  const addTask = async ({text, day, reminder}) => {
    const task = {
      text: text,
      day: day,
      reminder: reminder
    }

    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const togleReminder = async (id) => {
    let togledTask = tasks.find( (task) => task.id === id)
    togledTask = {...togledTask, reminder: !togledTask.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(togledTask)
    })

    const data = await res.json()
    let togledTasks = tasks.map( (task) => 
      task.id === id ? data : task
    )
    setTasks(togledTasks)
  }

  const onAddTaskComponent = () => {
    toggleShowTaskComponent(!toggleTaskComponent)
  }

  return (
    <div className="container">
      <Header title='Task Scheduler' onAddTask={onAddTaskComponent} showAddTask={toggleTaskComponent}></Header>
      {toggleTaskComponent ? <AddTask onAdd={addTask}></AddTask> : ''}
      { tasks.length > 0 ? 
        (<Tasks tasks={tasks} 
          onDelete={deleteTask}
          onTogle={togleReminder}>  
        </Tasks>) : 
        ('No Tasks to show.')}
    </div>
  );
}

export default App;
