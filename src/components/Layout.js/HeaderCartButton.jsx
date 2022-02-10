import { useContext } from "react"
import { modalContext } from "../../store/modal-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
	const { onShow } = useContext(modalContext)
	return (
		<button onClick={onShow} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>You Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	)
}

export default HeaderCartButton
