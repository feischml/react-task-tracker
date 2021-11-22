import Header from "./components/Header";
import { useState } from 'react'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {

  const[showTaskComponent, setShowTaskComponent] = useState(false)

  const [tasks, setTasks] = useState([
    {   id: '1',
        text: 'test 1',
        day: 'Feb, 5th at 2:03pm',
        reminder: false
    },
    {   id: '2',
        text: 'test 2',
        day: 'Feb, 6th at 1:03pm',
        reminder: true },
    {   id: '3',
        text: 'test 3',
        day: 'Feb, 4th at 7:03pm',
        reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ))
  } 

  const addTask = ({text, day, reminder}) => {
    setTasks(tasks.concat({
      text: text,
      day: day,
      reminder: reminder
    }))
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
