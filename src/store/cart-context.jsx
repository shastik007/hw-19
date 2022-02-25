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
			let currentIndex = state.items.findIndex(
				(el) => el.id == action.item.id,
			)
			if (currentIndex == -1) {
				let newItem = { ...action.item, amount: 1 }
				const newItems = state.items.concat(newItem)
				const newAmount = state.totalAmount + 1

				return {
					...state,
					items: newItems,
					totalAmount: newAmount,
				}
			} else {
				let currentElement = state.items[currentIndex]
				let newItems = state.items.map((el, index) => {
					return index === currentIndex
						? { ...el, amount: el.amount + 1 }
						: el
				})
				const newAmount = state.totalAmount + 1

				return {
					...state,
					items: newItems,
					totalAmount: newAmount,
				}
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
