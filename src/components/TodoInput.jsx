import { useState } from "react";

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    const handleAdd = () => {
        if (todoValue) {
            handleAddTodos(todoValue);
            setTodoValue('');
        }
    }

    return (
        <header>
            <input 
                value={todoValue} 
                onChange={(e) => setTodoValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAdd();
                    }
                }}
                placeholder="Enter todo..." 
            />
            <button onClick={handleAdd}>
                Add
            </button>
        </header>
    );
}
