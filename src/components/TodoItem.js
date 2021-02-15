import React from "react"
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import "./TodoItem.css"
import {useDispatch} from "react-redux"
import {setChecked, removeItem} from "../features/todoSlice"

const TodoItem = ({name, done, id}) => {
	const dispatch = useDispatch()

	const handleChange = ()=> {
		dispatch(setChecked(id))
	}
	const handleclick = ()=>{
		dispatch(removeItem(id))
	}

	return(
		<div className="item">
			<Checkbox
        	checked={done}
        	color = "primary"
        	onChange={handleChange}
        	inputProps={{ 'aria-label': 'primary checkbox' }}
      		/>
			<p className={done && 'item--done'}>{name}</p>
			<IconButton aria-label="delete" onClick={handleclick}>
  				<DeleteIcon />
			</IconButton>
		</div>
		)
}

export default TodoItem;