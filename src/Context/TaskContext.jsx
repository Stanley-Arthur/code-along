import React, { useState,useEffect } from 'react'
import {createContext, useContext} from "react"
import useLocalStorage from '../hooks/useLocalStorage';

export const TaskContext= createContext({
    task:[],
    setvalue:(tasks)=>{},
});

export const TaskContextProvider=({children}) =>{
    const [tasks, setTasks]= useState([]);
    const {data, setValue}= useLocalStorage("tasks",[]);

    useEffect(()=>{
        setTasks(data)
    },[data])


    return (
        <TaskContext.Provider value={{tasks,setValue}}>
            {children}
        </TaskContext.Provider>
    )
}



export const useTaskContext = () => useContext(TaskContext);
