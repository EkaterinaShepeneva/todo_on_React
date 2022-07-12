import { useState } from "react"

function TodoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    const changeInput = (event) => {
        setUserInput([event.currentTarget.value])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            handleSubmit(event)
        }
    }

    return (
         <form className="inputBox" onSubmit={handleSubmit}>
             <input 
                className="inputBox__input"
                value={userInput}
                type="text"
                onChange={changeInput}
                onKeyDown={handleKeyPress}
                placeholder="Write something..."
            />        
            <button
                className="inputBox__add"
            >+</button>
        </form>
    )
}

export default TodoForm