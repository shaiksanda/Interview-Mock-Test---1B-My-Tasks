import {useState} from 'react'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]
const MyTasks = () => {
  console.log('hello')
  const [searchInput, setSearchInput] = useState('')
  const [tag, setTag] = useState('Health')
  const [tasks, setTasks] = useState([])
  const [currentFilter, setCurrentFilter] = useState('')

  const handleButtonsFilters = type => {
    setCurrentFilter(type)
  }

  const filteredTasks = currentFilter
    ? tasks.filter(each => each.tags === currentFilter)
    : tasks

  console.table('tasks:', JSON.stringify(tasks))

  const addTasks = () => {
    const newTask = {task: searchInput, tags: tag}
    setTasks(prevTasks => {
      // Update the tasks state
      const updatedTasks = [...prevTasks, newTask]
      // Clear input and tag after updating tasks
      setSearchInput('')
      setTag('Health')
      return updatedTasks
    })
  }

  const handleInputChange = event => {
    setSearchInput(event.target.value)
  }
  const handleTagChange = event => {
    setTag(event.target.value)
  }

  const clearFilters = () => {
    setCurrentFilter('')
  }

  return (
    <div className="bg-container">
      <div className="tasks-container">
        <h1 className="task-heading">Create a task!</h1>
        <label htmlFor="task" className="task">
          Task
        </label>
        <input
          value={searchInput}
          id="task"
          type="text"
          placeholder="Enter the task here"
          className="input"
          onChange={handleInputChange}
        />
        <label className="task" htmlFor="tags">
          Tags
        </label>
        <select onChange={handleTagChange} value={tag} className="dropdown">
          {tagsList.map(each => (
            <option key={each.optionId}>{each.displayText}</option>
          ))}
        </select>
        <button onClick={addTasks} type="button" className="add-task-btn">
          Add Task
        </button>
      </div>
      <div className="tags-container">
        <h1 className="task">Tags</h1>
        <div className="buttons">
          {tagsList.map(each => (
            <li key={each.optionId}>
              <button
                onClick={() => handleButtonsFilters(each.displayText)}
                type="button"
                className="button"
              >
                {each.displayText}
              </button>
            </li>
          ))}
        </div>
        <button onClick={clearFilters} type="button" className="clear-filters">
          Clear Filters
        </button>
        <h1 className="task-tag-heading">Tasks</h1>
        {filteredTasks.length === 0 ? (
          <div>
            <h1 style={{color: 'white'}}>No Tasks Added Yet</h1>
          </div>
        ) : (
          filteredTasks.map(each => (
            <div className="array-container" key={each.task}>
              <p style={{color: 'black', fontWeight: 'bold'}}>{each.task}</p>
              <button type="button" className="array-button">
                {each.tags}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyTasks
