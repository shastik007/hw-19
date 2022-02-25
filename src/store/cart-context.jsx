import React, { useReducer } from 'react'
import { ADD, REMOVE } from '../helpers/constants'

const CardContext = React.createContext()

const intitState = {
	items: [],
	totalPrice: 0,
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
				const newPrice = state.totalPrice + action.item.price

				return {
					...state,
					items: newItems,
					totalPrice: newPrice,
				}
			} else {
				let currentElement = state.items[currentIndex]
				let newItems = state.items.map((el, index) => {
					return index === currentIndex
						? { ...el, amount: ++el.amount }
						: el
				})
				const newPrice = state.totalPrice + action.item.price

				return {
					...state,
					items: newItems,
					totalPrice: newPrice,
				}
			}
		case REMOVE:
			let currentElement = state.items.find((el) => el.id == action.id)
			if (currentElement.amount === 1) {
				let newItems = state.items.filter((el) => el.id !== action.id)
				let newPrice = state.totalPrice - currentElement.price
				return {
					...state,
					items: newItems,
					totalPrice:newPrice,
				}
			} else {
				let newItems = state.items.map(el => {
					return el.id === action.id
						? { ...el, amount: --el.amount}
						: el
				})
				const newPrice = state.totalPrice - currentElement.price

				return {
					...state,
					items: newItems,
					totalPrice: newPrice,
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
	const onRemoveHandler = (id) => {
		dispatch({ type: REMOVE, id })
	}
	return (
		<CardContext.Provider
			value={{
				items: state.items,
				totalPrice: state.totalPrice,
				onAdd: onAddHandler,
				onRemove: onRemoveHandler,
			}}
		>
			{props.children}
		</CardContext.Provider>
	)
}

export default CardContext
