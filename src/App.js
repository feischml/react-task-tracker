import Header from "./components/Header";
import { useState, useEffect } from 'react'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {

  const[showTaskComponent, setShowTaskComponent] = useState(false)

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
    const data = await res.json()
    return data
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
      body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const togleReminder = (id) => {
    let togledTasks = tasks.map( (task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    )
    setTasks(togledTasks)
  }

  const onAddTaskComponent = () => {
    setShowTaskComponent(!showTaskComponent)
  }

  return (
    <div className="container">
      <Header title='Task Scheduler' onAddTask={onAddTaskComponent} showAddTask={showTaskComponent}></Header>
      {showTaskComponent ? <AddTask onAdd={addTask}></AddTask> : ''}
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
