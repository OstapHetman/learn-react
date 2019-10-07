import React, {useState, ChangeEvent, FormEvent} from 'react'

interface TodoFormProps {
    addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("")
    }

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add to Do</button>
        </form>
    )
}
