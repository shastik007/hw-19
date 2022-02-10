import React, { useReducer } from 'react'
import { ADD, REMOVE } from '../helpers/constants'

const CardContext = React.createContext()

const intitState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			const newItems = state.items.concat(action.item)
			const newAmount = state.totalAmount + 1

			return {
				...state,
				items: newItems,
				totalAmount: newAmount,
			}

		default:
			return state
	}
}

export const CardContextProvider = (props) => {
	const [state, dispatch] = useReducer(cartReducer, intitState)
	const onAddHandler = (item) => {
		dispatch({ type: ADD, item })
	}
	const onRemoveHandler = (id) => {}
	return (
		<CardContext.Provider
			value={{
				items: state.items,
				totalAmount: state.totalAmount,
				onAdd: onAddHandler,
				onRemove: onRemoveHandler,
			}}
		>
			{props.children}
		</CardContext.Provider>
	)
}

export default CardContext