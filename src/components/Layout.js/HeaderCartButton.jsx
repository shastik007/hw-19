import { useContext } from 'react'
import CardContext from '../../store/cart-context'
import { modalContext } from '../../store/modal-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
	const { onShow } = useContext(modalContext)
	const { items } = useContext(CardContext)
	return (
		<button onClick={onShow} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>You Cart</span>
			<span className={classes.badge}>{items.length}</span>
		</button>
	)
}

export default HeaderCartButton
