import React, { Fragment, useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { modalContext } from '../../store/modal-context'
import CartItem from './CartItem'
import CardContext from '../../store/cart-context'
import CartImg from '../../assets/CartImg.png'

const Cart = (props) => {
	const cartData = useContext(CardContext)
	const totalPriceToFixed = cartData.totalPrice.toFixed(2)
	const cartItems = cartData.items.map((el) => (
		<CartItem
			key={el.id}
			name={el.name}
			amount={el.amount}
			price={el.price}
			item={el}
			onAdd={cartData.onAdd.bind(null, el)}
			onRemove={cartData.onRemove.bind(null, el.id)}
		/>
	))
	const { onClose } = useContext(modalContext)
	return (
		<Modal>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amoutn</span>
				<span>{totalPriceToFixed}$</span>
			</div>
			{cartData.items.length === 0 && (
				<div className={classes.empty}>
					<h2>card is empty</h2>
					<img src={CartImg} alt='' />
				</div>
			)}
			<div className={classes.actions}>
				<button onClick={onClose} className={classes['button--alt']}>
					close
				</button>
				<button className={classes.button}>order</button>
			</div>
		</Modal>
	)
}

export default Cart
