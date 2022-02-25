import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import { useContext, useState } from 'react'
import CardContext from '../../store/cart-context'
const MealItemForm = ({ data, id }) => {
	const [input, setInput] = useState(1)
	const ctxData = useContext(CardContext)

	const onChangeHandler = (e) => {
		setInput(e.target.value)
	}

	const onAddHandler = (data) => {
		let amount = Number(input)
		return () => {
			ctxData.onAdd(data, amount)
			setInput(1)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
	}
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				label='amount'
				onchange={onChangeHandler}
				input={{
					id: 'amount_' + id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					value: input,
				}}
			/>
			<button onClick={onAddHandler(data)}> + Add</button>
		</form>
	)
}
export default MealItemForm
