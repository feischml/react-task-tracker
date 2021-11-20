import Header from "./components/Header";
import { useState } from 'react'
import Tasks from "./components/Tasks";


const App = () => {

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

  return (
    <div className="container">
      <Header title='Task Scheduler'></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
