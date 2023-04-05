const tasks = [
    {
        id: 1,
        task: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
    {
        id: 2,
        task: 'Go on a Date with Jane',
        day: 'Sept 12th at 5:00pm',
        reminder: true
    },
    {
        id: 3,
        task: 'Food Shopping',
        day: 'Dec 1st at 8:30am',
        reminder: true
    }
]

const Task =()=>{
    return(
        <div>
            {tasks.forEach(task => (<h3>{task.task}</h3>))}
        </div>
    )
}

export default Task