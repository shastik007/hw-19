import classes from './Modal.module.css'
import { Fragment, useContext } from 'react'
import ReactDOM from 'react-dom'
import { modalContext } from '../../store/modal-context'

const Modal = (props) => {
	const { onClose } = useContext(modalContext)
	const Backdrop = () => {
		return <div onClick={onClose} className={classes.backdrop} />
	}

	const ModalOverlay = () => {
		return (
			<div className={classes.modal}>
				<div className={classes.content}>{props.children}</div>
			</div>
		)
	}
	const elem = document.getElementById('modal')
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, elem)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				elem,
			)}
		</Fragment>
	)
}

export default Modal
