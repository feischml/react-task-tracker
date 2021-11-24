import { useState } from 'react'

function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Text</label>
                <input type='text' defaultValue={text} onChange={ (e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day and time</label>
                <input type='text' defaultValue={day} onChange={ (e) => setDay(e.target.value)}></input>
            </div>    
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' defaultValue={reminder} onChange={ (e) => setReminder(e.currentTarget.checked)}></input>
            </div>    

            <input type='Submit' defaultValue='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
