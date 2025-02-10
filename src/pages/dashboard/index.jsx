// import React from "react"
// import TodoList from "../../components/todolist/TodoList";
import React from "react";
import Projects from "../../components/projects/Projects";

const Dashboard = () => {
    return (

        < Projects projectsList={
            [
                {
                    title: 'Routines',
                    todos: ["Added todo", "Added todo"]
                },
                {
                    title: 'Inspirations',
                    todos: ["Added todo", "Added todo"]
                }
            ]} />
    )
}

export default Dashboard;