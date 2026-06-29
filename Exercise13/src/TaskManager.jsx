import taskStyles from './taskManager.module.css'
import { useReducer, useState } from 'react'

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {

        case 'add':
            return [...state, action.payload]

        case 'toggle':
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            )

        case 'delete':
            return state.filter(task => task.id !== action.payload)

        default:
            return state
    }
}

const TaskManager = () => {

    const [tasks, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState("")

    const handleAdd = () => {
        if (inputValue.trim() === "") return

        const newTask = {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false
        }

        dispatch({ type: 'add', payload: newTask })
        setInputValue("")
    }

    return (
        <div className={taskStyles.container}>

            <div className={taskStyles.card}>

                <h1 className={taskStyles.title}>
                    My Todo List
                </h1>

                {/* INPUT */}
                <div className={taskStyles.inputRow}>

                    <input
                        type="text"
                        placeholder="Enter your task..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={taskStyles.input}
                    />

                    <button
                        onClick={handleAdd}
                        className={taskStyles.addBtn}
                    >
                        Add
                    </button>

                </div>

                {/* TASK LIST */}
                <ul className={taskStyles.list}>
                    {
                        tasks.map(task => (
                            <li key={task.id} className={taskStyles.item}>

                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() =>
                                        dispatch({ type: 'toggle', payload: task.id })
                                    }
                                />

                                <span className={task.completed ? taskStyles.done : ""}>
                                    {task.text}
                                </span>

                                <button
                                    className={taskStyles.deleteBtn}
                                    onClick={() =>
                                        dispatch({ type: 'delete', payload: task.id })
                                    }
                                >
                                    Delete
                                </button>

                            </li>
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}

export default TaskManager