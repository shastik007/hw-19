import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import { useContext } from 'react'
import CardContext from '../../store/cart-context'
const MealItemForm = (props) => {
	const { onAdd } = useContext(CardContext)
	const submitHandler = (e) => {
		e.preventDefault()
	}
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				label='amount'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button onClick={onAdd.bind(null, props.data)}> + Add</button>
		</form>
	)
}
export default MealItemForm
