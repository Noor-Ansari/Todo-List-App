import React, {useState} from 'react'
import "./Input.css";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import {saveTodo} from "../features/todoSlice"

export default function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    function clickHandler(){
        setInput('')
        if (input !=""){
            dispatch(saveTodo({
                item : input,
                done : false,
                id : Date.now()
        }))
    }}

    return (
        <div className="input">
            <input type="text"
            placeholder="Add the task"
            value={input} 
            onChange={(e) => setInput(e.target.value)}/>
            <Button
            onClick={clickHandler}
            variant="contained"
            color="default"
            className="button">
                Add
            </Button>
        </div>
    )
}
