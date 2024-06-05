import { useState } from "react";




function ToDoList(){

    const [tasks, setTasks] =  useState([]);
    const [newtasks, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newtasks.trim !== ""){
            setTasks(t => [...t, newtasks]);
            setNewTasks("");
        }
    }

    function deleteTask(index){
            const updatedTasks = tasks.filter((_, i) => i != index);
            setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
        <>
            <div className="to-do-list">
                <h1>To-Do List</h1>

                <div>
                    <input type="text" placeholder="Enter a task..." value={newtasks}
                    onChange={handleInputChange}
                    />
                    <button className="add-btn" onClick={addTask}>ADD</button>
                </div>
                <ol>
                    {tasks.map(
                        (task,index) =>
                            <li key={index}>
                                <span className="text">{task}</span>
                                <button className="delete-btn" onClick={() =>deleteTask(index)}>Delete</button>
                                <button className="up-btn" onClick={() =>moveTaskUp(index)}>Up</button>
                                <button className="down-btn" onClick={() =>moveTaskDown(index)}>Down</button>
                            </li>
                    )}
                </ol>
            </div>
        </>
    );
}


export default ToDoList